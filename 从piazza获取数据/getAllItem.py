__author__ = 'zhangyanni'

#coding='utf-8'
import gzip
import http.cookiejar
import urllib.request
import urllib.parse
import json
import codecs
import socket
import os
import time


#ungzip解压数据
def ungzip(data):
    try:  # 尝试解压       
        data = gzip.decompress(data)       
    except:
        print('未经压缩, 无需解压')
    return data


#getOpener 函数接收一个 head 参数, 这个参数是一个字典. 函数把字典转换成元组集合, 放进 opener.
#自动处理使用 opener 过程中遇到的 Cookies
#自动在发出的 GET 或者 POST 请求中加上自定义的 Header
cj = http.cookiejar.CookieJar()
pro = urllib.request.HTTPCookieProcessor(cj)
opener = urllib.request.build_opener(pro)
urllib .request .install_opener(opener)

def piazza_login():
    header = {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3',
        'Connection':'keep-alive',
        'Host':'piazza.com',
        'Referer:':'https://piazza.com/class/',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64; rv:38.0) Gecko/20100101 Firefox/38.0',
        'X-Requested-With':'XMLHttpRequest'
        }
    #postDict是登录时所post的表单
   
    email = "jennyzhang8800@163.com"
   
    password = "jeny20110607"
    print('登录中...')
    postDict = {'from': '/signup','email':email ,'password': password , 'remember': 'on'}
    postData = urllib.parse.urlencode(postDict).encode()
   
    url = 'https://piazza.com/class/'
    loginNum=1
    while 1:
        req = urllib.request.Request (url,postData,header)
        response=urllib .request .urlopen(req)
        data=response.read()
        data = ungzip(data)
        #登录到piazza，并get登录后的网页保存在piazza_logindata.txt
        data=data.decode(encoding='UTF-8',errors='ignore')
        saveFile("piazza-login-data",data)
        FileSize=os.path.getsize("piazza-data/piazza-login-data.json")
        if (FileSize > 150000):
            print("登录成功！")
            break
        else:
            if loginNum==3:
                print("三次登录失败，请检查用户名，密码是否正确！")
                break
            loginNum+=1
            print("本次登录未成功，正在尝试第"+str(loginNum)+"次登录...")
            
         
    


#从piazza的api中获得json数据，根据发送的postJson不同获得不同的数据，可获得某一个标签的所有问题，或指是cid的某一个问题    
def piazza_getdata_from_api(postJson):
    
    header_new={
        'Accept':'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding': 'gzip, deflate',
        'Content-Type': 'application/json; charset=utf-8',
        'Accept-Language': 'zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3',
        'Host':'piazza.com',
        'Referer:':'https://piazza.com/class',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64; rv:37.0) Gecko/20100101 Firefox/37.0',
        'X-Requested-With':'XMLHttpRequest'
        }
    
    postData=json.dumps(postJson).encode()
    url="https://piazza.com/logic/api/"
    #设置超时为20s，超时后再次发出请求获取数据，超过三次则输出异常写入文件
    tryNum=1
    while 1:
        socket.setdefaulttimeout(20)
        try:
            req = urllib.request.Request(url,postData,header_new)
            response=urllib .request .urlopen(req)
            data=response.read()
            data = ungzip(data)
            data=data.decode()
            #处理data的中文
            myjson=json.loads(data)
            newjson=json.dumps(myjson,ensure_ascii=False)
            return newjson
        except:
            if(tryNum==3):
                return '''{"result":"history":{"subject":"","content":"sorry!there is no content"}}'''
            else:
                tryNum+=1
                print("timeout!"+"try to get data again")
                
           

#保存数据到文件中  
def saveFile(file_name,data):
    output = codecs.open("piazza-data-new/"+file_name+".json",'w',"utf-8")
    output.write(data)
    output.close()   
    print("already write to "+file_name+".json")
#读文件
def readFile(file_name):
    fileIn = codecs.open(file_name,'r',"utf-8")
    data=fileIn.read()
    fileIn.close()
    return data

#调用函数登录到piazza
piazza_login()
print("------------------------------------------------------------------------")
print("正在获取，请稍等...")
postJson={"method":"network.get_my_feed","params":{"nid":"i5j09fnsl7k5x0","sort":"updated"}}
data=piazza_getdata_from_api(postJson)
saveFile("piazza_my_feed",data)
#获得今天的时间
cur_time=time.strftime(r"%Y-%m-%d",time.localtime())
data=readFile("piazza-data/piazza_my_feed.json")
#把 json字符串转成字典，便于解析数据
data_dict=json.loads(data)
dict = {}
#获得"result"下的"feed"列表
items=data_dict['result']['feed']
#遍历items当遍历到有今天更新的问题时，则加入列表中，获取更新后的信息
for item in items:
    id = item['id']
    nr = item['nr']
    dict[nr]=id  
print(dict.keys())
#根据nr向api发出POST请求获得有今天更新的问题的json数据
for nr in dict.keys():
    print(nr)
    postJson={"method":"content.get","params":{"cid":nr,"nid":"i5j09fnsl7k5x0"}}
    data=piazza_getdata_from_api(postJson)
    file_name=str(nr)
    saveFile(file_name,data)

                   

   



