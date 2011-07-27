/*
 * ds.proxy.conn.url = 'myPage.php';
   ds.load();
*/
mzst.views.AddComponentsForm = Ext.extend(Ext.form.FormPanel, {
    id: "add-components-form",
    
    scroll: true,
    initComponent: function(){
        
        mzst.views.AddComponentsForm.superclass.initComponent.call(this);
    },
    afterRender: function(){
        mzst.views.AddComponentsForm.superclass.afterRender.call(this);
        mzst.models.components.each(function(record){
            
            this.add({xtype: 'checkboxfield', name: record.get('name'), label: record.get('name'),  record: record, checked:record.get('valid'), listeners: {
                check: function() {
                    //do something
                    this.record.set('valid', true);
                    this.record.save();
                    mzst.models.components.sync();
                    mzst.models.components.save();
                },
                uncheck: function() {
                    //do something
                    this.record.set('valid', false); 
                    this.record.save();
                    mzst.models.components.sync();
                    mzst.models.components.save();
                } }
              });
        }, this);
        this.doLayout();
    }
});

mzst.views.AddComponentsPanel = Ext.extend(Ext.Panel,{
    layout: 'fit',
    id: 'add-components-panel',
    fullscreen : true,
    store:mzst.models.components,
    tpl: 'helloworld',
    dockedItems: [{
        xtype: 'toolbar',
        // Note, you can pass in not only some text, but also a block of HTML, including a base64 encoded image.
        title: '添加应用工具',
        ui: 'dark',
        iconCls: 'info',
        
        items: [{ iconMask: true, ui: 'back', iconCls: 'reply', handler: goMainPage }].concat([{xtype: 'spacer'}]).concat([{ text: '提交',handler: function() {                                   
            Ext.getCmp('mzst_group_button_panel').deleteAllButton();
            Ext.getCmp('mzst_group_button_panel').addButtonByStore(mzst.models.components);
            goMainPage();
            // doLayout should put after the goMainPage, otherwise, the button will fly to left
            Ext.getCmp('mzst_group_button_panel').doLayout();
        } }])
   }],
   items: [new mzst.views.AddComponentsForm()] // TODO: add List
});