// could use store
mzst.views.WYInfoDetailReviewEditor = Ext.extend(Ext.form.FormPanel,{
    id: 'mzst_review_editor',
    items: [
        {
            xtype: 'textareafield',
            name: 'review',
            label: '发布评价'
        }
    ]
});

mzst.views.WYInfoDetailReviewInnerPanel = Ext.extend(Ext.List, {
	id: "mzst_wy_info_detail_review_inner_list",
	
	itemTpl: mzst.views.wyInfoDetailReviewInnerListItemTpl(),
    
    scroll: 'vertical',
    
    scroll: 'vertical',
    
    plugins: [{
        ptype: 'pullrefresh'
    }, new Ext.plugins.ListPagingPlugin({
		    loadMoreText: '更多...', 
		    autoPaging: false,
		    onPagingTap: function(){
		        var list = Ext.getCmp("mzst_wy_info_detail_review_inner_list");
		        list.store.removeAll();
		       // list.store.add(mzst.stores.wyinfo);
		        //list.store.load({params:{start:0, limit:25}});
		    }
		})]
});


mzst.views.WYInfoDetailInnerPanel = Ext.extend(Ext.DataView, {
	tpl:  new Ext.XTemplate(mzst.views.wyInfoInnerDetailTpl()),
	scroll: 'vertical',
	layout: 'fit',	// must set fit and fullscreen, otherwise will not scroll.
	fullscreen : true,
	plugins: [{
        ptype: 'pullrefresh'
    }],
    
    emptyText: '本评情已经被删除',
    itemSelector:'div.entry',
   
});

mzst.views.WYInfoDetailInnerTabPanel = Ext.extend(Ext.TabPanel,{
	id: 'mzst_wy_info_detail_inner_tabpanel',
    type: 'dark',
    sortable: true,
    
    items: [{
    			layout: 'fit',
    			fullscreen : true,
    			scroll: 'vertical',
                title: '详情',
                items: [new mzst.views.WYInfoDetailInnerPanel({store: mzst.stores.wyinfodetail })],
            }, {
                title: '图片',
                html: '2',
                
            }, {
                title: '评价',
                items: [ new mzst.views.WYInfoDetailReviewInnerPanel({store: mzst.stores.wyinfodetailreviews }),
                		 new mzst.views.WYInfoDetailReviewEditor(),
                		 new Ext.Button({text:"提交", handle: function(){
                		 	// TODO: send rivews to server
                		 }}) 
                ]
               
            }]
});

mzst.views.WYInfoDetailPanel = Ext.extend(Ext.Panel,{
	layout: 'fit',
    id: 'wy-info-detail-panel',
    fullscreen : true,
    
    dockedItems: [{
        xtype: 'toolbar',
        // Note, you can pass in not only some text, but also a block of HTML, including a base64 encoded image.
        title: '物业信息--详情',
        ui: 'dark',
        iconCls: 'info',
        
        items: [{ iconMask: true, ui: 'back', iconCls: 'reply', handler: goWYInfoListPage }].concat([{xtype: 'spacer'}]).concat([{ iconMask: true, iconCls: 'refresh',handler: function() {                                   
            // Ext.getCmp("mzst_wy_info_detail_inner_tabpanel").getActiveItem().items.get(0).store.removeAll();
            Ext.getCmp("mzst_wy_info_detail_inner_tabpanel").getActiveItem().items.get(0).store.read();
        } }])
   }],
   items: new mzst.views.WYInfoDetailInnerTabPanel()
});

