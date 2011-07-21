// The teagrams Viewport is an extension of the Ext.Panel component.
// This is "main" wrapping view.
mzst.views.Viewport = Ext.extend(Ext.Panel, {
    // Let's set some config options for the panel.
    fullscreen: true,
    layout: 'fit',
    
    // Now, we initialize it.
    initComponent: function() {

        // Similar to calling "super" in languages like Java.  Kicks off initialization in parent classes.
        mzst.views.Viewport.superclass.initComponent.apply(this, arguments);
    }

});