#!/usr/bin/python

import pexpect
import os
import time


upd_time=time.strftime(r"%Y-%m-%d_%H:%M:%S",time.localtime())
os.chdir('/home/zyni/piazza-xblock')
os.system('git add .')
os.system('git commit -am "%s %s"' %("update at:",upd_time))
p=pexpect.spawn('git push')
print 'git push...'
i=p.expect([pexpect.TIMEOUT, 'Username.*'])
if i==0:
   print 'error'
   exit(0)
if i==1:
   print 'Authenticate github...'
   p.sendline('jennyzhang8800')
   j=p.expect([pexpect.TIMEOUT,'Password.*:'])
   if j==1:
      p.sendline('Jeny20110607')
      j=p.expect([pexpect.TIMEOUT,'master'])
      if j==0:
         print 'timeout!'
         exit(0)
      if j==1:
         print "already push to github!"
   else:
      print j

