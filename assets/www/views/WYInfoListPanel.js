// This is the list item inside in the main list.  It is created for every record in the model, or simply
// each item in the array returned from the Instagram API.
mzst.views.WYInfoInnerList = Ext.extend(Ext.List, {

    // Each item in the InnerList will be rendered with our imgTpl() declared in our Templates.js file.
    itemTpl: mzst.views.wyInfoInnerListItemTpl(),

    // The class name associated with each InnerList item.  We can style using this as the root CSS class for
    // all styles inside the InnerList items.
   // itemCls: 'teagram',

    // Here's where we add the pull to refresh plugin.  Yep, that's all you need to do. =)
    plugins: [{
        ptype: 'pullrefresh'
    }]

    
});

var bottombuttonsGroup = [{
            xtype: 'segmentedbutton',
            
            items: [{
                text: '全部',
                
            }, {
                text: '我的',
                pressed : true,
                
            }, {
                text: '邻居的',
                badgeText: '1',
               
            },{
                text: '好友的',
               
            },{
                text: '发布',
               
            }
            ]
        }];

mzst.views.WYInfoListPanel = Ext.extend(Ext.Panel,{
    layout: 'fit',
    id: 'wy-info-list-panel',
    
    dockedItems: [{
        xtype: 'toolbar',
        // Note, you can pass in not only some text, but also a block of HTML, including a base64 encoded image.
        title: '物业信息',
        ui: 'dark',
        iconCls: 'info',
        cls: 'card1',
        items: [{ iconMask: true, ui: 'back', iconCls: 'reply', handler: goMainPage }].concat([{xtype: 'spacer'}]).concat([{ iconMask: true, iconCls: 'refresh'}])
   },{
       xtype: 'toolbar',
       ui: 'dark',
       items: [{xtype: 'spacer'}].concat([{text:'更多'}]).concat([{xtype: 'spacer'}]),
       dock: 'top'
   },
   {
       xtype: 'toolbar',
       ui: 'dark',
       // dock this toolbar at the bottom
       dock: 'bottom',
       // you konw there is no align property available on buttons inside a Sencha Touch toolbar
       // In Sencha Touch, toolbars are nothing more than containers with an hbox layout and 
       // custom styling. So in order to alter the alignment, the pack and other hbox layout configuration 
       // you could do: the spaceer and concat will help you
       items: [{xtype: 'spacer'}].concat(bottombuttonsGroup).concat([{xtype: 'spacer'}])
       
       }],
    items: [ new mzst.views.WYInfoInnerList({store: mzst.stores.wyinfo })]
});