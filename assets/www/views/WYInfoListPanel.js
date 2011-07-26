/* proxy: new Ext.data.ScriptTagProxy({
            url: 'http://www.vinylfox.com/yui-ext/examples/grid-paging/grid-paging-data.php'
        }),
 
        reader: new Ext.data.JsonReader({
            root: 'results',
            totalProperty: 'total',
            id: 'id'
        }, [
            {name: 'employee_name', mapping: 'name'},
            {name: 'job_title', mapping: 'title'},
            {name: 'hire_date', mapping: 'hire_date', type: 'date', dateFormat: 'm-d-Y'},
            {name: 'is_active', mapping: 'active'}
        ])
 
    }); 
*/

var paging = new Ext.plugins.ListPagingPlugin({
    loadMoreText: '更多...', 
    autoPaging: false,
    onPagingTap: function(){
        var list = Ext.getCmp("mzst_wy_info_list_inner_list");
        list.store.removeAll();
       // list.store.add(mzst.stores.wyinfo);
        //list.store.load({params:{start:0, limit:25}});
    }
});

// This is the list item inside in the main list.  It is created for every record in the model, or simply
// each item in the array returned from the Instagram API.
mzst.views.WYInfoListInnerList = Ext.extend(Ext.List, {

    id: "mzst_wy_info_list_inner_list",
    // Each item in the InnerList will be rendered with our imgTpl() declared in our Templates.js file.
    itemTpl: mzst.views.wyInfoInnerListItemTpl(),
    
    scroll: 'vertical',

    // The class name associated with each InnerList item.  We can style using this as the root CSS class for
    // all styles inside the InnerList items.
   // itemCls: 'teagram',

    // Here's where we add the pull to refresh plugin.  Yep, that's all you need to do. =)
    plugins: [{
        ptype: 'pullrefresh'
    }, paging]

    
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
        items: [{ iconMask: true, ui: 'back', iconCls: 'reply', handler: goMainPage }].concat([{xtype: 'spacer'}]).concat([{ iconMask: true, iconCls: 'refresh',handler: function() {                                   
            Ext.getCmp("mzst_wy_info_list_inner_list").store.read()
        } }])
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
    items: [ new mzst.views.WYInfoListInnerList({store: mzst.stores.wyinfo })]
});