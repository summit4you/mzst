// could use store
mzst.views.SecondhandDetailReviewEditor = Ext.extend(Ext.form.FormPanel,{
    id: 'mzst_second_hand_review_editor',
    items: [
        {
            xtype: 'textareafield',
            name: 'review',
            label: '发布评价'
        }
    ]
});

mzst.views.SecondhandDetailReviewInnerPanel = Ext.extend(Ext.List, {
    id: "mzst_second_hand_info_detail_review_inner_list",
    
    itemTpl: mzst.views.secondhandDetailReviewInnerListItemTpl(),
    
    scroll: 'vertical',
    
    scroll: 'vertical',
    
    plugins: [{
        ptype: 'pullrefresh'
    }, new Ext.plugins.ListPagingPlugin({
            loadMoreText: '更多...', 
            autoPaging: false,
            onPagingTap: function(){
                var list = Ext.getCmp("mzst_second_hand_info_detail_review_inner_list");
                list.store.removeAll();
               // list.store.add(mzst.stores.wyinfo);
                //list.store.load({params:{start:0, limit:25}});
            }
        })]
});


mzst.views.SecondhandDetailInnerPanel = Ext.extend(Ext.DataView, {
    tpl:  new Ext.XTemplate(mzst.views.secondhandInnerDetailTpl()),
    scroll: 'vertical',
    layout: 'fit',  // must set fit and fullscreen, otherwise will not scroll.
    fullscreen : true,
    plugins: [{
        ptype: 'pullrefresh'
    }],
    
    emptyText: '本评情已经被删除',
    itemSelector:'div.entry',
   
});

mzst.views.SecondhandDetailInnerTabPanel = Ext.extend(Ext.TabPanel,{
    id: 'mzst_second_hand_detail_inner_tabpanel',
    type: 'dark',
    sortable: true,
    
    items: [{
                layout: 'fit',
                fullscreen : true,
                scroll: 'vertical',
                title: '详情',
                items: [new mzst.views.SecondhandDetailInnerPanel({store: mzst.stores.secondhanddetail })],
            }, {
                title: '图片',
                html: '2',
                
            }, {
                title: '评价',
                items: [ new mzst.views.SecondhandDetailReviewInnerPanel({store: mzst.stores.secondhanddetailreviews }),
                         new mzst.views.SecondhandDetailReviewEditor(),
                         new Ext.Button({text:"提交", handle: function(){
                            // TODO: send rivews to server
                         }}) 
                ]
               
            }]
});

mzst.views.SecondhandDetailPanel = Ext.extend(Ext.Panel,{
    layout: 'fit',
    id: 'second-hand-detail-panel',
    fullscreen : true,
    
    dockedItems: [{
        xtype: 'toolbar',
        // Note, you can pass in not only some text, but also a block of HTML, including a base64 encoded image.
        title: '二手信息--详情',
        ui: 'dark',
        iconCls: 'info',
        
        items: [{ iconMask: true, ui: 'back', iconCls: 'reply', handler: goSecondhandListPage }].concat([{xtype: 'spacer'}]).concat([{ iconMask: true, iconCls: 'refresh',handler: function() {                                   
            // Ext.getCmp("mzst_wy_info_detail_inner_tabpanel").getActiveItem().items.get(0).store.removeAll();
            Ext.getCmp("mzst_second_hand_detail_inner_tabpanel").getActiveItem().items.get(0).store.read();
        } }])
   }],
   items: new mzst.views.SecondhandDetailInnerTabPanel()
});

