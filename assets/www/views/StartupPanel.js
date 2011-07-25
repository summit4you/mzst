mzst.views.StartupPanel = Ext.extend(Ext.Panel,{
    layout: 'fit',
    id: 'startup-panel',
    

    // Now, we initialize it.
    initComponent: function() {
     // Create new instance of the our TeagramLists component.
        mzst.views.progressbar = new mzst.ProgressBar();
        
        mzst.views.progressbar.on('complete', function(obj){
           // mzst.views.progressbar.destroy();
            this.destroy();
            
            mzst.views.mainpanel = new mzst.views.MainPanel();
            var sPan = Ext.getCmp('startup-panel'); // Instead of single obj will be better
            sPan.add( mzst.views.mainpanel );
           
            sPan.doLayout();
          /*  var p = new Ext.Panel({scroll: 'vertical',});
            var ct;
            for(var i = 0; i < 32; ++i){
                if(i % 4 == 0){
                    ct = new Ext.Container({
                        height: 60,
                        layout: 'hbox',
                    });    
                    p.add(ct);
                }
                ct.add({
                    xtype: 'button',
                    text: i,
                    width: 50,
                    height: 50
                });
            }
            mzst.views.mainpanel.add(p);*/
            mzst.views.mainpanel.doLayout();
            
        }, Ext.getCmp('startup-panel'));

        // Let's add our view to the Viewport.
        // This is defined in the "views" folder under its respective name.
        Ext.apply(this, {
            items: [
                      mzst.views.progressbar,
                     
            ]
        });
        mzst.views.StartupPanel.superclass.initComponent.apply(this, arguments);
    }
});

