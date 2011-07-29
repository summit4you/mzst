mzst.views.SelectNeighborPanelInnerList = new Ext.extend(Ext.List,{
    
    id: "mzst_selectneighbor_panel_inner_list",
    
    // Each item in the InnerList will be rendered with our imgTpl() declared in our Templates.js file.
    itemTpl: mzst.views.selectneighborPanelInnerListItemTpl(),
    
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
        var list = Ext.getCmp("mzst_selectneighbor_panel_inner_list");
        list.store.removeAll();
       // list.store.add(mzst.stores.wyinfo);
        //list.store.load({params:{start:0, limit:25}});
    }
})]

    
});

mzst.views.SelectNeighborListPanel = Ext.extend(Ext.Panel,{
    layout: 'fit',
    id: 'mzst-selectneighbor-list-panel',
    fullscreen : true,
    
    dockedItems: [{
        xtype: 'toolbar',
        // Note, you can pass in not only some text, but also a block of HTML, including a base64 encoded image.
        title: '请选择邻居',
        ui: 'dark',
        iconCls: 'info',
        
        items: [{ iconMask: true, ui: 'back', iconCls: 'reply', handler: goSendMessageListPage }].concat([{xtype: 'spacer'}]).concat([{ text:"提交",handler: function() {                                   
           // Ext.getCmp("mzst_selectneighbor_panel_inner_list").store.read();
            goSendMessageListPage();
            Ext.getCmp("mzst_sendmessage_editor").items.get(0).refresh();
            Ext.getCmp("mzst-sendmessage-list-panel").doLayout();
        } }])
   },{
       xtype: 'toolbar',
       ui: 'dark',
       // dock this toolbar at the bottom
       dock: 'bottom',
       // you konw there is no align property available on buttons inside a Sencha Touch toolbar
       // In Sencha Touch, toolbars are nothing more than containers with an hbox layout and 
       // custom styling. So in order to alter the alignment, the pack and other hbox layout configuration 
       // you could do: the spaceer and concat will help you
       items: [{xtype: 'spacer'}].concat(mainPanelBottomButtonsGroup).concat([{xtype: 'spacer'}])
       
       }],
   items: [new mzst.views.SelectNeighborPanelInnerList({store: mzst.stores.selectneighbor  }) ]
});