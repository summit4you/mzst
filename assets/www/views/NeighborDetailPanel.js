
mzst.views.NeighborDetailInnerDataView = Ext.extend(Ext.DataView,{

    tpl:  new Ext.XTemplate(mzst.views.neighborInnerDetailTpl()),
    scroll: 'vertical',
    layout: 'fit',  // must set fit and fullscreen, otherwise will not scroll.
    fullscreen : true,
    plugins: [{
        ptype: 'pullrefresh'
    }],
    
    emptyText: '页面出错了！',
    itemSelector:'div.entry-neighbor',
});


mzst.views.NeighborDetailPanel = Ext.extend(Ext.Panel,{
    layout: 'fit',
    id: 'neighbor-detail-panel',
    fullscreen : true,
    
    dockedItems: [{
        xtype: 'toolbar',
        // Note, you can pass in not only some text, but also a block of HTML, including a base64 encoded image.
        title: '邻居--详情',
        ui: 'dark',
        iconCls: 'info',
        
        items: [{ iconMask: true, ui: 'back', iconCls: 'reply', handler: goNeighborPage }].concat([{xtype: 'spacer'}]).concat([{ iconMask: true, iconCls: 'refresh',handler: function() {                                   
            
            // Ext.getCmp("mzst_second_hand_detail_inner_tabpanel").getActiveItem().items.get(0).store.read();
        } }])
   }],
   items: [new mzst.views.NeighborDetailInnerDataView({store: mzst.stores.neighborspace })],
});