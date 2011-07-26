// Let's define some template helpers to display our data.
// 
mzst.views.wyInfoInnerListItemTpl = function () {
    return "<div class='entry_list'><div class='avatar48'><a href='space.php?uid=70'><img src='{image_url}' alt='美宅网' class='avatar'></a></div> " +
        "<div class='title'>" +
        "<a href='cp.php?ac=share&amp;type=blog&amp;id=336' id='a_share_336' class='a_share'>分享</a>" +
        "<h4><a href='space.php?uid=70&amp;do=blog&amp;id=336'>{title}</a></h4>"+
        "<div>"+
        "<a href='space.php?uid=70'>美宅网</a> <span class='time' style='font-size: 12px;'>2010-05-12 14:43</span>"+
        "</div>"+
        "</div>"+
        "<div class='detail image_right l_text s_clear' id='blog_article_336'>"+
        "<p class='image'><a href='space.php?uid=70&amp;do=blog&amp;id=336'><img src='http://www.meizhai.cc/attachment/201005/12/70_1273646589R43Z.jpg' alt='{title}'></a></p>{description}</div>"+
        "<div class='status'>"+
        "分类: <a href='space.php?uid=70&amp;do=blog&amp;classid=9'>官方博客</a><span class='pipe'>|</span><a href='space.php?uid=70&amp;do=blog&amp;id=336'>305 次阅读</a><span class='pipe'>|</span>没有评论</div></div>";
};