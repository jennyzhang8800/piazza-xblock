/* Javascript for PiazzaXBlock. */
function PiazzaXBlock(runtime, element) {

    function updateCount(result) {
        $('.count', element).text(result.count);
    }

    var handlerUrl = runtime.handlerUrl(element, 'increment_count');

    $('p', element).click(function(eventObject) {
        $.ajax({
            type: "POST",
            url: handlerUrl,
            data: JSON.stringify({"hello": "world"}),
            success: updateCount
        });
    });


    $(function ($) {
        /* Here's where you'd do things on page load. */
        var source = $("#page-center-template").html();
        var template = Handlebars.compile(source);
        //注册一个比较大小的Helper,判断v1是否等于于v2
        Handlebars.registerHelper("compare",function(v1,v2,options){
            if(v1==v2){
                //满足添加继续执行
                return options.fn(this);
            }else{
                //不满足条件执行{{else}}部分
                return options.inverse(this);
            }
        });

        var data = {"error": null, "result": {"nr": 10, "upvote_ids": [], "change_log": [{"type": "create", "when": "2015-03-02T14:32:25Z", "uid": "i6ry3y1y5rj", "data": "i6ryu3gidor6c4", "anon": "no"}, {"uid": "hdjonbiyfs62ie", "to": "i6ryu3gf8kq6c3", "when": "2015-03-02T15:58:06Z", "anon": "no", "data": "i6s1w9vvsqq21z", "type": "i_answer"}, {"type": "followup", "to": "i6ryu3gf8kq6c3", "when": "2015-03-03T07:03:03Z", "uid": "i6ry3y1y5rj", "anon": "no"}, {"type": "followup", "to": "i6ryu3gf8kq6c3", "when": "2015-03-03T12:24:52Z", "uid": "i6t2oq81ZXD", "anon": "no"}, {"type": "feedback", "to": "i6ryu3gf8kq6c3", "when": "2015-03-03T14:43:30Z", "uid": "hdjonbiyfs62ie", "anon": "no"}, {"type": "followup", "to": "i6ryu3gf8kq6c3", "when": "2015-03-03T15:45:29Z", "uid": "hcrrjuyequh4bt", "anon": "no"}, {"type": "feedback", "to": "i6ryu3gf8kq6c3", "when": "2015-03-03T15:46:30Z", "uid": "i6ry3y1y5rj", "anon": "no"}, {"type": "feedback", "to": "i6ryu3gf8kq6c3", "when": "2015-03-03T15:47:57Z", "uid": "i6ry3y1y5rj", "anon": "no"}, {"type": "feedback", "to": "i6ryu3gf8kq6c3", "when": "2015-03-04T00:35:31Z", "uid": "hdjonbiyfs62ie", "anon": "no"}, {"type": "feedback", "to": "i6ryu3gf8kq6c3", "when": "2015-03-04T00:37:39Z", "uid": "i6tz0qianu33p3", "anon": "no"}, {"type": "feedback", "to": "i6ryu3gf8kq6c3", "when": "2015-04-04T07:43:24Z", "uid": "i7vvun1vjqw", "anon": "no"}], "q_edits": [], "i_edits": [], "unique_views": 186, "bookmarked": 6, "config": {}, "history": [{"subject": "问下1.7 操作系统结构 这个单选题 (2009计算机统考)单处理器系统中&#xff0c;可并行的是()", "content": "<p> 1)进程与进程 2)处理器与设备 3)处理器与通道 4)设备与设备</p>\n<p></p>\n<p>这个题目意思没有看懂啊</p>", "created": "2015-03-02T14:32:25Z", "uid": "i6ry3y1y5rj", "anon": "no"}], "data": {"embed_links": []}, "request_instructor_me": false, "folders": ["quiz1"], "type": "question", "tag_good": [], "no_answer": 0, "created": "2015-03-02T14:32:25Z", "t": 1433499914633, "id": "i6ryu3gf8kq6c3", "status": "active", "tag_good_arr": [], "default_anonymity": "no", "my_favorite": false, "bucket_order": 2, "is_bookmarked": false, "is_tag_good": false, "bucket_name": "Today", "no_answer_followup": 0, "children": [{"folders": [], "bucket_order": 2, "config": {}, "history": [{"subject": "", "content": "<p>已对题目进行的完善。现在能看明白吗&#xff1f;</p>", "created": "2015-03-02T15:58:06Z", "uid": "hdjonbiyfs62ie", "anon": "no"}], "data": {"embed_links": []}, "bucket_name": "Today", "is_tag_endorse": false, "children": [], "tag_endorse": [], "tag_endorse_arr": [], "created": "2015-03-02T15:58:06Z", "id": "i6s1w9v2qdz21w", "type": "i_answer"}, {"no_upvotes": 0, "uid": "i6ry3y1y5rj", "bucket_name": "Week 3/1 - 3/7", "bucket_order": 9, "updated": "2015-03-03T07:03:03Z", "config": {}, "anon": "no", "data": {"embed_links": null}, "folders": [], "subject": "<p>2)处理器与设备</p>\n<p>3)处理器与通道</p>\n<p>4)设备与设备</p>\n<p></p>\n<p>这3项 并行运行要怎么解释?</p>", "children": [{"uid": "hdjonbiyfs62ie", "bucket_name": "Week 3/1 - 3/7", "bucket_order": 9, "updated": "2015-03-03T14:43:30Z", "config": {}, "anon": "no", "data": {"embed_links": null}, "folders": [], "subject": "<p>已修改成“可并行执行或工作的对象是”。现在能看明白吗&#xff1f;</p>\n<p></p>\n<p>看来我还有许多需要推敲的地方。欢迎继续提问。</p>", "children": [], "type": "feedback", "created": "2015-03-03T14:43:30Z", "id": "i6teo6vox243dc"}, {"uid": "i6ry3y1y5rj", "bucket_name": "Week 3/1 - 3/7", "bucket_order": 9, "updated": "2015-03-03T15:47:57Z", "config": {}, "anon": "no", "data": {"embed_links": null}, "folders": [], "subject": "<p>4) 设备与设备并行运行, 那么是指他们的驱动程序是可以同时运行了吗</p>", "children": [], "type": "feedback", "created": "2015-03-03T15:47:57Z", "id": "i6tgz2thc1p74h"}, {"uid": "hdjonbiyfs62ie", "bucket_name": "Week 3/1 - 3/7", "bucket_order": 9, "updated": "2015-03-04T00:35:31Z", "config": {}, "anon": "no", "data": {"embed_links": null}, "folders": [], "subject": "<p>设备与设备可以并行工作&#xff0c;这里没有说它们的驱动程序。仔细推敲&#xff0c;两个设备连到同一台计算机上&#xff0c;它们也会有相互影响&#xff0c;但通常我们认为&#xff0c;设备是可以并行和独立工作的。</p>", "children": [], "type": "feedback", "created": "2015-03-04T00:35:31Z", "id": "i6tztjfjw0c6i4"}, {"uid": "i6tz0qianu33p3", "bucket_name": "Week 3/1 - 3/7", "bucket_order": 9, "updated": "2015-03-04T00:37:39Z", "config": {}, "anon": "no", "data": {"embed_links": null}, "folders": [], "subject": "<p>外部設備往往是異步運行的。也就是說&#xff0c;驅動程序與硬件設備往往是不用同時運作的。</p>\n<p>比如一個硬盤&#xff0c;要讀取一段數據。在硬盤尋道並讀取數據的這段時間裡&#xff0c;處理器完全可以去做別的事情&#xff0c;直到硬盤準備好數據之後&#xff0c;再用 中斷 的方式喚醒驅動程序。這時驅動程序才開始佔用處理器。</p>", "children": [], "type": "feedback", "created": "2015-03-04T00:37:39Z", "id": "i6tzwa595015zl"}], "type": "followup", "no_answer": 0, "created": "2015-03-03T07:03:03Z", "id": "i6sy81r7ecs1r7"}, {"no_upvotes": 0, "uid": "i6t2oq81ZXD", "bucket_name": "Week 3/1 - 3/7", "bucket_order": 9, "updated": "2015-03-03T12:24:52Z", "config": {}, "anon": "no", "data": {"embed_links": null}, "folders": [], "subject": "<p>因为是单处理器&#xff0c;一次只能处理一个进程。。并行是要求同一个时刻有多个在运行。</p>", "children": [{"uid": "i6ry3y1y5rj", "bucket_name": "Week 3/1 - 3/7", "bucket_order": 9, "updated": "2015-03-03T15:46:30Z", "config": {}, "anon": "no", "data": {"embed_links": null}, "folders": [], "subject": "<p>这里的并行是指真正的同时运行吗? 那么4) 两个设备同时运行, 是指两个设备的驱动程序可以同时工作?</p>", "children": [], "type": "feedback", "created": "2015-03-03T15:46:30Z", "id": "i6tgx7irh6f42z"}, {"uid": "i7vvun1vjqw", "bucket_name": "Today", "bucket_order": 2, "updated": "2015-04-04T07:43:24Z", "config": {}, "anon": "no", "data": {"embed_links": null}, "folders": [], "subject": "<p>进程<strong>并行&#xff08;同一时刻&#xff09;</strong>的话&#xff0c;单处理器做不到&#xff0c;<strong>并发&#xff08;同一时间间隔&#xff09;</strong>的话还行~</p>", "children": [], "type": "feedback", "created": "2015-04-04T07:43:24Z", "id": "i82pr77170n7k7"}], "type": "followup", "no_answer": 0, "created": "2015-03-03T12:24:52Z", "id": "i6t9pwp9wc5kx"}, {"no_upvotes": 0, "uid": "hcrrjuyequh4bt", "bucket_name": "Week 3/1 - 3/7", "bucket_order": 9, "updated": "2015-03-03T15:45:29Z", "config": {}, "anon": "no", "data": {"embed_links": null}, "folders": [], "subject": "补充&#xff1a;单处理器一次也只能处理一个线程。", "children": [], "type": "followup", "no_answer": 0, "created": "2015-03-03T15:45:29Z", "id": "i6tgvwr1uox46c"}], "request_instructor": 0, "tags": ["quiz1", "student"], "s_edits": [], "num_favorites": 0}, "aid": "iajgu555zxo2le"}
        var html = template(data);
        $("#page_center").html(html);
    });
}
