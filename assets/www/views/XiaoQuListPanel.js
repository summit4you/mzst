mzst.views.XiaoQuPanelInnerList = new Ext.extend(Ext.List,{
    
    id: "mzst_xiaoqu_panel_inner_list",
    
    // Each item in the InnerList will be rendered with our imgTpl() declared in our Templates.js file.
    itemTpl: mzst.views.xiaoquPanelInnerListItemTpl(),
    
    scroll: 'vertical',

    // The class name associated with each InnerList item.  We can style using this as the root CSS class for
    // all styles inside the InnerList items.
   // itemCls: 'teagram',

    // Here's where we add the pull to refresh plugin.  Yep, that's all you need to do. =)
    plugins: [{
        ptype: 'pullrefresh'
    }, new Ext.plugins.ListPagingPlugin({
    loadMoreText: '更多...', 
    autoPaging: false,
    onPagingTap: function(){
        var list = Ext.getCmp("mzst_xiaoqu_panel_inner_list");
        list.store.removeAll();
       // list.store.add(mzst.stores.wyinfo);
        //list.store.load({params:{start:0, limit:25}});
    }
})],
    
    onItemDisclosure: function (record) {
     // TODO: Render the selected note in the note editor.
        //goNeighborDetailPage();
    }

    
});

mzst.views.XiaoQuListPanel = Ext.extend(Ext.Panel,{
    layout: 'fit',
    id: 'mzst-xiaoqu-list-panel',
    fullscreen : true,
    
    dockedItems: [{
        xtype: 'toolbar',
        // Note, you can pass in not only some text, but also a block of HTML, including a base64 encoded image.
        title: '小区新闻',
        ui: 'dark',
        iconCls: 'info',
        
        items: [{ iconMask: true, ui: 'back', iconCls: 'reply', handler: goMorePage }].concat([{xtype: 'spacer'}]).concat([{ iconMask: true, iconCls: 'refresh',handler: function() {                                   
            Ext.getCmp("mzst_xiaoqu_panel_inner_list").store.read();
           
        } }])
   }],
   items: [new mzst.views.XiaoQuPanelInnerList({store: mzst.stores.xiaoqu  }) ]
});