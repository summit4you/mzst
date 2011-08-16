// maybe use controller will be better

function changeCarouselItem(id){
    
    // Ext.getCmp('carousel-panel').setActiveItem(id,{ type: 'flip', direction: 'right' });
    Ext.getCmp('carousel-panel').setActiveItem(id,{type: 'slide', direction: 'left'});
}

function goWYInfoListPage(){
    changeCarouselItem('wy-info-list-panel');
}

function goWYInfoDetailPage(){
    changeCarouselItem('wy-info-detail-panel');
}

function goMainPage(){
    changeCarouselItem('main-panel');
}

function goAddComponentsPanel(){
    changeCarouselItem('add-components-panel'); 
}

function goSecondhandListPage(){
    changeCarouselItem('second-hand-list-panel');
}

function goSecondhandDetailPage(){
    changeCarouselItem('second-hand-detail-panel');
}

function goNeighborPage(){
    changeCarouselItem('mzst-neighbor-panel');
}

function goNeighborDetailPage(){
    changeCarouselItem('neighbor-detail-panel');
}

function goFeedListPage(){
    changeCarouselItem('mzst-feed-list-panel');
}

function goCollectionListPage(){
    changeCarouselItem("mzst-collection-list-panel");
}

function goMessageListPage(){
    changeCarouselItem("mzst-message-list-panel");
}

function goSendMessageListPage(){
    changeCarouselItem("mzst-sendmessage-list-panel");
}

function goSelectNeighborListPage(){
    changeCarouselItem("mzst-selectneighbor-list-panel");
}

function goMorePage(){
    changeCarouselItem("mzst-more-list-panel");
}

function goXiaoQuDetailPage(){
    changeCarouselItem('mzst-xiaoqu-detail-panel');
}

function goXiaoQuListPage(){
    changeCarouselItem("mzst-xiaoqu-list-panel");
}

function goMoreConfigurePanel(){
    changeCarouselItem("mzst-more-configure-list-panel");
}

function showWarningHumanCertification(){
    Ext.Msg.show({
        title:'人肉认证',
        msg: '<div style="height:100px"><ul style="font-weight: bold; font-style: normal; font-size: 12px; font-family: Verdana, Geneva, sans-serif; list-style-type: none;"><li style="float: left;">提醒：</li><li style="margin-top: 16px; float: right; margin-left: 30px;">您自己需要有其它三个人对您进行认证后，您才可以认证其它人的真实性</li></ul></div>',
        buttons: new Ext.Button({text: "退出"}),
        //fn: processResult,
        animEl: 'elId'
     });
    
}

function cpIdentify(id){
    
   /* Ext.Ajax.request({
        url: getDataFrom("cp_identify.php"),
        method: 'get',
       
        success: function(response) {
             //Reponse
            alert(response);
        }
    }); */
    
    Ext.util.JSONP.request({
        url: getDataFrom("cp_identify.php"),
        callbackKey: 'callback',
        params: {
            op: "checked",
            uid: id,
            supe_uid: mzst.stores.space.getAt(0).get("uid"),
            dummy: new Date().getTime(),
        },
        scriptTag: true,
        callback: function(data) {
           eval(data.script);
        }
    });
}

function showHumanCertification(){
    Ext.Msg.show({
        title:'人肉认证',
        msg: '<div style="height:140px"><ul style="font-weight: bold; font-style: normal; font-size: 12px; font-family: Verdana, Geneva, sans-serif; list-style-type: none;"><li style="float: left;">提醒：</li><li style="margin-top: 16px; float: right; margin-left: 32px;">已经有2个人认证了张三丰。为了保证社区安全，只有您真的认识TA，并确认TA在小区居住方进行认证。</li></ul></div>',
        buttons: [new Ext.Button({text: "确定"}),new Ext.Button({text: "退出"})],
        //fn: processResult,
        animEl: 'elId'
     });
}

// check he is or is not you
function isSelf(uid){
    if(mzst.stores.space.getfield("uid")==uid){
        return true;
    }else{ return false; }
}

var mainPanelBottomButtonsGroup = [{
    xtype: 'segmentedbutton',
    
    items: [{
        text: '邻居',
        handler: goNeighborPage
    }, {
        text: '动态',
        handler: goFeedListPage
    }, {
        text: '消息',
        badgeText: '1',
        handler: goMessageListPage
    },{
        text: '收藏',
        handler: goCollectionListPage
    },{
        text: '更多',
        handler: goMorePage/*function() {
            if (!this.actions) {
                this.actions = new Ext.ActionSheet({
                    items: [{
                        text: '个人信息',
                        ui: 'decline',
                        handler : Ext.emptyFn
                    },{
                        text : '系统设置',
                        handler : Ext.emptyFn
                    },{
                        text : 'Cancel',
                        scope : this,
                        handler : function(){
                            this.actions.hide();
                        }
                    }]
                });
            }
            this.actions.show();
        }*/
    }
    ]
}];


//Ext.Ajax.on("beforerequest", function(){mzst.jsonpmask.show();});  
//Ext.Ajax.on("requestcomplete", function(){mzst.jsonpmask.hide();});  
//Ext.util.JSONP.on("requestexception", function(){mzst.jsonpmask.hide();Ext.msg.alert('读取数据异常');});  