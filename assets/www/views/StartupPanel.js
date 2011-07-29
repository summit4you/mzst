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
            mzst.views.carouselpanel =  new Ext.Carousel({
                id: 'carousel-panel',
                layout:'card',
               // fullscreen: true,
               // cardSwitchAnimation: 'slide',
                items: [
                            mzst.views.mainpanel
                    ]
                });
            mzst.views.moreconfigurepanel = new mzst.views.MoreConfigurePanel();
            mzst.views.carouselpanel.add(  mzst.views.moreconfigurepanel );
            mzst.views.xiaoqupanel = new mzst.views.XiaoQuListPanel();
            mzst.views.carouselpanel.add(  mzst.views.xiaoqupanel );
            mzst.views.xiaoqudetailpanel = new mzst.views.XiaoQuDetailPanel();
            mzst.views.carouselpanel.add(   mzst.views.xiaoqudetailpanel  );
            mzst.views.morepanel = new mzst.views.MorePanel();
            mzst.views.carouselpanel.add(  mzst.views.morepanel );
            mzst.views.selectneighborpanel = new mzst.views.SelectNeighborListPanel();
            mzst.views.carouselpanel.add(  mzst.views.selectneighborpanel );
           mzst.views.collectionpanel = new mzst.views.CollectionListPanel();
           mzst.views.carouselpanel.add(  mzst.views.collectionpanel );
           mzst.views.sendmessagepanel = new mzst.views.SendMessageListPanel();
           mzst.views.carouselpanel.add(  mzst.views.sendmessagepanel );
            mzst.views.messagepanel = new mzst.views.MessageListPanel();
            mzst.views.carouselpanel.add(  mzst.views.messagepanel );
            mzst.views.feedpanel = new mzst.views.FeedListPanel();
            mzst.views.carouselpanel.add(  mzst.views.feedpanel );
            mzst.views.neighborpanel = new mzst.views.NeighborPanel();
            mzst.views.carouselpanel.add( mzst.views.neighborpanel);
            mzst.views.neighbordetailpanel = new mzst.views.NeighborDetailPanel();
            mzst.views.carouselpanel.add( mzst.views.neighbordetailpanel);
            mzst.views.wyinfolistpanel = new mzst.views.WYInfoListPanel();
            mzst.views.carouselpanel.add( mzst.views.wyinfolistpanel);
            mzst.views.wyinfodetailpanel = new mzst.views.WYInfoDetailPanel();
            mzst.views.carouselpanel.add( mzst.views.wyinfodetailpanel);
            mzst.views.secondhandlistpanel = new mzst.views.SecondhandListPanel();
            mzst.views.carouselpanel.add( mzst.views.secondhandlistpanel);
            mzst.views.secondhanddetailpanel = new mzst.views.SecondhandDetailPanel();
            mzst.views.carouselpanel.add( mzst.views.secondhanddetailpanel);
            mzst.views.addcomponentspanel = new mzst.views.AddComponentsPanel();
            mzst.views.carouselpanel.add( mzst.views.addcomponentspanel);
            var sPan = Ext.getCmp('startup-panel'); // Instead of single obj will be better
            sPan.add( mzst.views.carouselpanel );
           
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

