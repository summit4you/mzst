var tapHandler = function(button, event) {
            var txt = "User tapped the '" + button.text + "' button.";
            Ext.getCmp('toolbartxt').update(txt);
        };

var bottombuttonsGroup = [{
            xtype: 'segmentedbutton',
            
            items: [{
                text: '邻居',
                handler: tapHandler
            }, {
                text: '动态',
                pressed : true,
                handler: tapHandler
            }, {
                text: '消息',
                badgeText: '1',
                handler: tapHandler
            },{
                text: '收藏',
                handler: tapHandler
            },{
                text: '更多',
                handler: function() {
                    if (!this.actions) {
                        this.actions = new Ext.ActionSheet({
                            items: [{
                                text: '个人信息',
                                ui: 'decline',
                                handler : Ext.emptyFn
                            },{
                                text : '系统设置',
                                handler : Ext.emptyFn
                            },{
                                text : 'Cancel',
                                scope : this,
                                handler : function(){
                                    this.actions.hide();
                                }
                            }]
                        });
                    }
                    this.actions.show();
                }
            }
            ]
        }];

mzst.views.MainPanel = Ext.extend(Ext.Panel,{
    layout: 'fit',
   
    id:'toolbartxt',
    
   
   
    
    dockedItems: [{
        xtype: 'toolbar',
        // Note, you can pass in not only some text, but also a block of HTML, including a base64 encoded image.
        title: '万科四季花城',
        ui: 'dark',
        iconCls: 'info',
        cls: 'card1'
            },{
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
  
        items:new mzst.GroupButtonPanel(),       
    initComponent: function() {
        // main toolbar
        
       // Ext.apply(this,{item:[new mzst.GroupButtonPanel()]});
        
        mzst.views.MainPanel.superclass.initComponent.apply(this, arguments);
        
    }
       
});