// Let's register the name of our application.
Ext.regApplication({
    name: 'mzst',
    tabletStartupScreen: 'theming/images/tablet_startup.png',
    phoneStartupScreen: 'theming/images/phone_startup.png',
    launch: function() {
        this.views.viewport = new this.views.Viewport();
    }
});