

mzst.views.MessagePanelInnerList = new Ext.extend(Ext.List,{
    
    id: "mzst_message_panel_inner_list",
    
    // Each item in the InnerList will be rendered with our imgTpl() declared in our Templates.js file.
    itemTpl: mzst.views.messagePanelInnerListItemTpl(),
    
    scroll: 'vertical',

    // The class name associated with each InnerList item.  We can style using this as the root CSS class for
    // all styles inside the InnerList items.
   // itemCls: 'teagram',

    // Here's where we add the pull to refresh plugin.  Yep, that's all you need to do. =)
    plugins: [{
        ptype: 'pullrefresh'
    }/*paging*/], // page could not appear in same tabpanel so here we delelt it
    
    onItemDisclosure: function (record) {
     // TODO: Render the selected note in the note editor.
        //goNeighborDetailPage();
    }

    
});

mzst.views.MessageListInnerTabPanel = Ext.extend(Ext.TabPanel,{
    id: 'mzst_message_list_inner_tabpanel',
    type: 'dark',
    sortable: true,
    
    items: [{
                layout: 'fit',
                
                scroll: 'vertical',
                title: '短信',
                items: [new mzst.views.MessagePanelInnerList({store: mzst.stores.message  })]
            }, {
                title: '通知',
                items: [new mzst.views.MessagePanelInnerList({store: mzst.stores.message  })]
                
            }, {
                title: '应用信息',
                html: '3',
                items: [new mzst.views.MessagePanelInnerList({store: mzst.stores.message  })]
            }
            ]
});

mzst.views.MessageListPanel = Ext.extend(Ext.Panel,{
    layout: 'fit',
    id: 'mzst-message-list-panel',
    fullscreen : true,
    
    dockedItems: [{
        xtype: 'toolbar',
        // Note, you can pass in not only some text, but also a block of HTML, including a base64 encoded image.
        title: '消息',
        ui: 'dark',
        iconCls: 'info',
        
        items: [{ text: '发短信', handler: goSendMessageListPage }].concat([{xtype: 'spacer'}]).concat([{ iconMask: true, iconCls: 'refresh',handler: function() {                                   
            Ext.getCmp("mzst_message_list_inner_tabpanel").getActiveItem().items.get(0).store.read();
           
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
   items: [new mzst.views.MessageListInnerTabPanel()]
});