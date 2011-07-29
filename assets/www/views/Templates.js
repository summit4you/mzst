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

mzst.views.SecondhandInnerListItemTpl = function () {
    return "<div class='entry_list'><div class='avatar48'><a href='space.php?uid=70'><img src='{image_url}' alt='美宅网' class='avatar'></a></div> " +
        "<div class='title'>" +
        "<a href='cp.php?ac=share&amp;type=blog&amp;id=336' id='a_share_336' class='a_share'>分享</a>" +
        "<h4><a href='javascript:;' onclick='goSecondhandDetailPage();'>{title}</a></h4>"+
        "<div>"+
        "<a href='space.php?uid=70'>美宅网</a> <span class='time' style='font-size: 12px;'>2010-05-12 14:43</span>"+
        "</div>"+
        "</div>"+
        "<div class='detail image_right l_text s_clear' id='blog_article_336'>"+
        "<p class='image'><a href='space.php?uid=70&amp;do=blog&amp;id=336'><img src='{image_url}' alt='{title}'></a></p>{description}</div>"+
        "<div class='status'>"+
        "分类: <a href='space.php?uid=70&amp;do=blog&amp;classid=9'>官方博客</a><span class='pipe'>|</span><a href='space.php?uid=70&amp;do=blog&amp;id=336'>305 次阅读</a><span class='pipe'>|</span>没有评论</div></div>";
};

mzst.views.secondhandDetailReviewInnerListItemTpl = function(){
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

//should use ' Enclose, if you use " instead of ' then you will see nothing!!!
mzst.views.secondhandInnerDetailTpl = function(){
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

mzst.views.neighborPanelInnerListItemTpl = function(){
    return '<div class="thumb_list">'+
            '<div class="avatar48"><a href="javascript:;" onclick="goNeighborDetailPage();"><img src="{image_url}" alt="{username}" width="48" height="48"></a></div>'+
            '<div class="thumbTitle"><p><a href="javascript:;" onclick="goNeighborDetailPage();" style="color:red;">{username}</a> <p><p> <img src="theming/images/admin.gif" align="absmiddle" /> <img src="theming/images/vip.gif" align="absmiddle" /></p></div>'+
            '<div class="config"><p><a href="" class="config_setting">设置</a></p> <p><a href="javascript:;" onclick="showHumanCertification()" class="config_know">我认识TA</a></p></div>'+
            '</div>';
}

mzst.views.neighborInnerDetailTpl = function(){
    return '<tpl for="."><div class="entry-neighbor" style="height:100%">'+
                '<div id="item-wrap">'+
                '<img src="{image_url}" />'+
                    '<span id="item-info" align="center">'+
                        '<div id="item-username">'+
                            '<div><p stype="font-weight: bold;  font-size:16pt;">{username}</p></div>'+
                            '<div class="config"><p><a href="" class="config_setting">设置</a></p> <p><a href="javascript:;" onclick="showHumanCertification()" class="config_know">我认识TA</a></p></div>'+
                            
                         '</div>'+
                         '<div class="item-huizhang">'+
                            '<div class="item-touxian item-box"><img src="{image_url}"/>'+
                                '<div class="item-name">帅哥</div>'+
                            '</div>'+
                            
                            '<div class="item-touxian item-box"><img src="{image_url}"/>'+
                                '<div class="item-name">业主</div>'+   
                            '</div>'+
                            
                             '<div class="item-touxian item-box"><img src="{image_url}"/>'+
                                '<div class="item-name">小区管理</div>'+   
                            '</div>'+
                          '</div>'+
                    '</span>'+
                    '<div id="item-clear"></div>'+
                '</div>'+
                '<div class="user-detail">'+
                '<ul>'+
                    '<li class="email"><p>帐号信息：<a>summit_mail@qq.com</a></p></li>'+
                    '<li><p class="l_item">财&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;富：12345</p><p class="r_item">人&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;缘：19 个好友</p></li>'+
                     '<li><p class="l_item">等&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;级：12345</p><p class="r_item">知&nbsp;&nbsp;名&nbsp;&nbsp;度：已有 123人次访问</p></li>'+
                     '<li><p>上次登录时间：现在</p></li>'+
                '</ul>'+
                '</div>'+
                '<div class="user-button">'+
                '<ul>'+
                '<li><p class="l_item"><a href="" class="config_setting">1个通知</a></p><p class="r_item"><a href="" class="config_setting">10个短信息</a></p></li>'+
                '<li><p class="l_item"><a href="" class="config_setting">1个好友请求</a></p><p class="r_item"><a href="" class="config_setting">15个新打招呼</a></p></li>'+
                '<li><p class="l_item"><a href="" class="config_setting">1个评价</a></p><p class="r_item"><a href="" class="config_setting">20个收藏</a></p></li>'+
                '<li><p class="l_item"><a href="" class="config_know">11个参加的活动</a></p><p class="r_item"><a href="" class="config_know">11篇分享</a></p></li>'+
                '<li><p class="l_item"><a href="" class="config_know">32个回复别人的分享</a></p><p class="r_item"><a href="" class="config_know">2个已经参加的群组</a></p></li>'+
                '</ul>'+
                '</div>'
            '</div></tpl>';
}

mzst.views.feedPanelInnerListItemTpl = function(){
    return '<div class="commentsTxt">'+
    '<a href="" title="{username}"><img class="picborder_l" namecard="true" uid="1238780744" title="{username}" src="{image_url}" ></a>'+
    '<div class="commentsContants">'+
    '<p class="commentsParm MIB_txtal"><a namecard="true" uid="1238780744" href="">{username}</a></p><p>{description}({datetime})</p>'+
    '</div>'+
'</div>';
}

mzst.views.collectionPanelInnerListItemTpl = function(){

    return '<div class="commentsTxt">'+
    '<a href="" title="{username}"><img class="picborder_l" namecard="true" uid="1238780744" title="{username}" src="{image_url}" ></a>'+
    '<div class="commentsContants">'+
    '<p class="commentsParm MIB_txtal"><a namecard="true" uid="1238780744" href="">{username}</a></p><p>{description}({datetime})</p>'+
    '</div>'+
'</div>';
}

mzst.views.messagePanelInnerListItemTpl = function(){

    return '<div class="commentsTxt">'+
    '<a href="" title="{username}"><img class="picborder_l" namecard="true" uid="1238780744" title="{username}" src="{image_url}" ></a>'+
    '<div class="commentsContants">'+
    '<p class="commentsParm MIB_txtal"><a namecard="true" uid="1238780744" href="">{username}</a></p><p>{description}({datetime})</p>'+
    '</div>'+
'</div>';
    
}

mzst.views.selectneighborPanelInnerListItemTpl = function(){

    return '<div class=" x-field x-field-checkbox x-label-align-left">'+
    '<div class="commentsTxt x-form-label" style="width: 80%; ">'+
   '<a href="" title="{username}"><img class="picborder_l" namecard="true" uid="1238780744" title="{username}" src="{image_url}" ></a>'+
   '<div class="commentsContants">'+
   '<p class="commentsParm MIB_txtal"><a namecard="true" uid="1238780744" href="">{username}</a></p><p>{description}({datetime})</p>'+
   '</div>'+
   '<input  type="checkbox" class="x-input-checkbox"  '+
   '<tpl if="checked"> checked </tpl> '+  // in tpl if , you could not use  {}
   'value="{checked}" id="{id}" onclick="mzst.stores.selectneighbor.getAt(mzst.stores.selectneighbor.find(\'id\',this.id)).set(\'checked\', this.checked);  mzst.stores.selectneighbor.save();"/>'+
'</div>'+
'</div>';
   
}

mzst.views.xiaoquDetailReviewInnerListItemTpl = function(){
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

//should use ' Enclose, if you use " instead of ' then you will see nothing!!!
mzst.views.xiaoquInnerDetailTpl = function(){
    return '<tpl for="."><div class="entry" style="height:100%">'+
                '<div class="title">'+
                    '<h1>{title}</h1>'+
                    '<span class="time">2009-09-14 13:30</span>'+
                '</div>'+
             '<div class="article-images"><a href=""><img src="{image_url}"/></a></div>'+
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

mzst.views.xiaoquPanelInnerListItemTpl = function(){

    return '<div class="commentsTxt">'+
   '<a href="" title="{username}"><img class="picborder_l" namecard="true" uid="1238780744" title="{username}" src="{image_url}" ></a>'+
   '<div class="commentsContants">'+
   '<p class="commentsParm MIB_txtal"><a namecard="true" uid="1238780744" href="">{username}</a></p><p>{description}({datetime})</p>'+
   '</div>'+
'</div>';
   
}