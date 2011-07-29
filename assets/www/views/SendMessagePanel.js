mzst.views.SendMessageEditor = Ext.extend(Ext.form.FormPanel,{
    id: 'mzst_sendmessage_editor',
    items: [
new Ext.ux.touch.ImageListField({
    label:"添加消息对象",
    
    store:mzst.stores.selectneighbor
        }),
        {
            xtype: 'textareafield',
            name: 'message',
            label: '(编辑消息内容)',
            
            
        }
    ]
});

mzst.views.SendMessageListPanel = Ext.extend(Ext.Panel,{
    layout: 'fit',
    id: 'mzst-sendmessage-list-panel',
    fullscreen : true,
    
    dockedItems: [{
        xtype: 'toolbar',
        // Note, you can pass in not only some text, but also a block of HTML, including a base64 encoded image.
        title: '消息',
        ui: 'dark',
        iconCls: 'info',
        
        items: [{ iconMask: true, ui: 'back', iconCls: 'reply', handler: goMessageListPage }].concat([{xtype: 'spacer'}]).concat([{text:"提交",handler: function() {                                   
           
           
        } }])
   }],
   items: [new mzst.views.SendMessageEditor() ]
});