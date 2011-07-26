// Let's define some template helpers to display our data.
// 
mzst.views.wyInfoInnerListItemTpl = function () {
    return "<div class='entry_list'><div class='avatar48'><a href='space.php?uid=70'><img src='{image_url}' alt='美宅网' class='avatar'></a></div> " +
        "<div class='title'>" +
        "<a href='cp.php?ac=share&amp;type=blog&amp;id=336' id='a_share_336' class='a_share'>分享</a>" +
        "<h4><a href='javascript:;' onclick='goWYInfoDetailPage();'>{title}</a></h4>"+
        "<div>"+
        "<a href='space.php?uid=70'>美宅网</a> <span class='time' style='font-size: 12px;'>2010-05-12 14:43</span>"+
        "</div>"+
        "</div>"+
        "<div class='detail image_right l_text s_clear' id='blog_article_336'>"+
        "<p class='image'><a href='space.php?uid=70&amp;do=blog&amp;id=336'><img src='{image_url}' alt='{title}'></a></p>{description}</div>"+
        "<div class='status'>"+
        "分类: <a href='space.php?uid=70&amp;do=blog&amp;classid=9'>官方博客</a><span class='pipe'>|</span><a href='space.php?uid=70&amp;do=blog&amp;id=336'>305 次阅读</a><span class='pipe'>|</span>没有评论</div></div>";
};

// should use ' Enclose, if you use " instead of ' then you will see nothing!!!
mzst.views.wyInfoInnerDetailTpl = function(){
    return '<tpl for="."><div class="entry" style="height:100%">'+
                '<div class="title">'+
                    '<h1>{title}</h1>'+
                    '<a href="space.php?uid=70&amp;do=tag">标签</a>:&nbsp;'+
                    '<a href="space.php?uid=70&amp;do=tag&amp;id=202">祈福新村</a>&nbsp;'+
                    '<a href="space.php?uid=70&amp;do=tag&amp;id=203">宣传活动</a>&nbsp;'+
                    '<span class="time">2009-09-14 13:30</span>'+
                '</div>'+
            '{article}'+
            '<div class="status">'+
            '<a href="cp.php?ac=share&amp;type=blog&amp;id=156" id="a_share" onclick="ajaxmenu(event, this.id,1)" class="a_share">分享</a>'+
            '<div class="r_option">'+
            '<a href="cp.php?ac=common&amp;op=report&amp;idtype=blog&amp;id=156" id="a_report" onclick="ajaxmenu(event, this.id,1)">举报</a><span class="pipe">|</span>'+
            '</div>'+
            '104 次阅读 | <span id="comment_replynum">1</span> 个评论'+
            '</div>'+
            '</div></tpl>';
};

mzst.views.wyInfoDetailReviewInnerListItemTpl = function(){
    return '<div class="comments_list" id="comment">'+
    '<ul id="comment_ul">'+
    '<li id="comment_357_li"><div class="avatar48"><a href="space.php?uid=544"><img src="http://sns.meizhai.cc/uc/images/noavatar_small.gif" alt="盼晴" class="avatar"></a></div>'+
    '<div class="title">'+
    '<div class="r_option">'+
    '<a href="cp.php?ac=comment&amp;op=reply&amp;cid=357" id="c_357_reply" onclick="ajaxmenu(event, this.id, 1)">回复</a>'+
    '</div>'+
    '<a href="space.php?uid=544" id="author_357">{username}</a> <span class="time">{datetime}</span>'+
    '</div>'+
    '<div class="detail" id="comment_357">{content}</div>'+
    '</li></ul>'+
'</div>';
}