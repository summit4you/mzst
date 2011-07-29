mzst.views.MoreConfigurePanel = Ext.extend(Ext.Panel,{
    layout: 'fit',
    id: 'mzst-more-configure-list-panel',
    fullscreen : true,
    scroll: 'vertical',
    dockedItems: [{
        xtype: 'toolbar',
        // Note, you can pass in not only some text, but also a block of HTML, including a base64 encoded image.
        title: '设置',
        ui: 'dark',
        iconCls: 'info',
        
        items: [{ iconMask: true, ui: 'back', iconCls: 'reply', handler: goMainPage }]
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
   items: [ {xtype:"panel", layout: {type:'vbox',align:'strech'},items:[{xtype:"button", text:"个人设置" }, {xtype:"button", text:"系统设置" }, {xtype:"button", text:"应用工具管理"}]} ]
});