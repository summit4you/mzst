
var paging = new Ext.plugins.ListPagingPlugin({
    loadMoreText: '更多...', 
    autoPaging: false,
    onPagingTap: function(){
        var list = Ext.getCmp("mzst_neighbor_panel_inner_list");
        //list.store.removeAll();
       // list.store.add(mzst.stores.wyinfo);
        //list.store.load({params:{start:0, limit:25}});
        
        mzst.stores.lj.load();
        
        Ext.getCmp("mzst_neighbor_panel_inner_list").refresh();
    }
});

mzst.views.NeighborPanelInnerList = Ext.extend(Ext.List,{
    
    id: "mzst_neighbor_panel_inner_list",
    
    // Each item in the InnerList will be rendered with our imgTpl() declared in our Templates.js file.
    itemTpl: mzst.views.neighborPanelInnerListItemTpl(),
    
    scroll: 'vertical',

    // The class name associated with each InnerList item.  We can style using this as the root CSS class for
    // all styles inside the InnerList items.
   // itemCls: 'teagram',

    // Here's where we add the pull to refresh plugin.  Yep, that's all you need to do. =)
    plugins: [{
        ptype: 'pullrefresh'
    }, paging],
    
    onItemDisclosure: function (record) {
     // TODO: Render the selected note in the note editor.
        
        Ext.apply(mzst.stores.neighborspace.proxy, {params: {uid: record.get("uid")}});
        mzst.stores.neighborspace.load();
        mzst.stores.neighborspace.on("load", goNeighborDetailPage);
    }

    
});

mzst.views.NeighborPanel = Ext.extend(Ext.Panel,{
    layout: 'fit',
    id: 'mzst-neighbor-panel',
    fullscreen : true,
    
    dockedItems: [{
        xtype: 'toolbar',
        // Note, you can pass in not only some text, but also a block of HTML, including a base64 encoded image.
        title: '邻居',
        ui: 'dark',
        iconCls: 'info',
        
        items: [{ iconMask: true, ui: 'back', iconCls: 'reply', handler: goMainPage }].concat([{xtype: 'spacer'}]).concat([{ iconMask: true, iconCls: 'refresh',handler: function() {                                   
            // Ext.getCmp("mzst_wy_info_detail_inner_tabpanel").getActiveItem().items.get(0).store.removeAll();
            Ext.getCmp("mzst_neighbor_panel_inner_list").store.read();
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
   items: [new mzst.views.NeighborPanelInnerList({store: mzst.stores.lj })]
});

mzst.stores.lj.on("load", function(){Ext.getCmp("mzst_neighbor_panel_inner_list").refresh();});