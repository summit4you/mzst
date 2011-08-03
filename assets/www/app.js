// Let's register the name of our application.
Ext.regApplication({
    name: 'mzst',
    tabletStartupScreen: 'theming/images/tablet_startup.png',
    phoneStartupScreen: 'theming/images/phone_startup.png',
    launch: function() {
        mzst.jsonpmask = new Ext.LoadMask(Ext.getBody(), {
        msg: "Please wait...",
        onBeforeLoad: function(){
                if (!this.disabled) {
                    this.el.mask(Ext.LoadingSpinner + '<div class="x-loading-msg">' + this.msg + '</div>', this.msgCls, false);
                    this.fireEvent('show', this, this.el, this.store);
                }
            }
        });
        this.views.viewport = new this.views.Viewport();
    }
});