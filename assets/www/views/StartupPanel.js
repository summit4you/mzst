mzst.views.StartupPanel = Ext.extend(Ext.Panel,{
    layout: 'fit',
    
    

    // Now, we initialize it.
    initComponent: function() {
     // Create new instance of the our TeagramLists component.
        mzst.views.progressbar = new mzst.ProgressBar();
        
        mzst.views.progressbar.on('complete', function(myVariable){
            mzst.views.progressbar.destroy();
        });

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

