mzst.models.Configure = Ext.regModel("mzst.models.Configure", {
    fields: [
        {name: 'uid', type: 'int'}, // You have to add a field with name "id", and type "int". This makes sencha able to delete the record
        {name: 'loupan', type: 'string'}
    ],
    // localstorage proxy should put into model instead of store, otherwise the model will default use ajax proxy, will product a error
    proxy: {
        type: 'localstorage',
        id: 'mzst_models_configure'
    }
   /* proxy: {
        type: "contactstorage"
    } */
});

mzst.models.configure = new Ext.data.Store({
    
    autoLoad: true,
    model:"mzst.models.Configure",
  
    
    listeners: {
        load:function(store, records, success){
            if (!records.length){ // if this is the first create store, should begin with 1 note: is not 0!!!!
                this.add({uid:'86'});
                this.sync();
                this.save();
            }else{
               /* for (var i = 0; i < records.length; i++){
                    alert( records[i].get('name')+' '+
                            records[i].get('panel_id')+
                            records[i].get('valid'));
                   
                }*/
            }
        }
    }
});

mzst.models.configure.load();
