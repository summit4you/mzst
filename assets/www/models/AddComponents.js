mzst.models.Components = Ext.regModel("mzst.models.Components", {
    fields: [
        {name: 'id', type: 'int'}, // You have to add a field with name "id", and type "int". This makes sencha able to delete the record
        {name: "name", type: "string" },
        {name: "panel_id", type: "string" },
        {name: "valid", type: "boolean"},
        {name: "handler", type:"auto"},
        {name: "text", type:"string"},
    ],
    // localstorage proxy should put into model instead of store, otherwise the model will default use ajax proxy, will product a error
    proxy: {
        type: 'localstorage',
        id: 'mzst_models_components'
    }
   /* proxy: {
        type: "contactstorage"
    } */
});

mzst.models.components = new Ext.data.Store({
    
    autoLoad: true,
    model:"mzst.models.Components",
  
    
    listeners: {
        load:function(store, records, success){
            if (!records.length){ // if this is the first create store, should begin with 1 note: is not 0!!!!
                this.add({id:'1', name: '物业信息', text:'物业信息', panel_id: 'wy-info-list-panel', valid: true, handler:goWYInfoListPage });
                this.add({id:'2', name: '二手物品交换', text:'二手物品交换',panel_id: 'second-hand-list-panel', valid: true,handler:goWYInfoListPage});
                this.add({id:'3', name: '生活便利电话分享', text:'生活便利电话',panel_id: 'wy-info-list-panel', valid: true,handler:goWYInfoListPage});
                this.add({id:'4', name: '小区活动', text:'小区活动',panel_id: 'wy-info-list-panel', valid: true,handler:goWYInfoListPage});
                this.add({id:'5', name: '子女教育交流', text:'子女教育交流',panel_id: 'wy-info-list-panel', valid: true,handler:goWYInfoListPage});
                this.add({id:'6', name: '周边商讯交流', text:'周边商讯点评',panel_id: 'wy-info-list-panel', valid: true,handler:goWYInfoListPage});
                this.add({id:'7', name: '灌水', text:'灌水',panel_id: 'wy-info-list-panel', valid: true,handler:goWYInfoListPage});
                this.add({id:'8', name: '家政服务', text:'家政服务',panel_id: 'wy-info-list-panel', valid: true,handler:goWYInfoListPage});
                this.add({id:'9', name: '宠物的故事', text:'宠物的故事',panel_id: 'wy-info-list-panel', valid: false,handler:goWYInfoListPage});
                this.add({id:'10', name: '医疗保健信息分享', text:'医疗保健信息分享',panel_id: 'wy-info-list-panel', valid: false,handler:goWYInfoListPage});
                this.add({id:'11', name: '拼车', text:'拼车',panel_id: 'wy-info-list-panel', valid: false,handler:goWYInfoListPage});
                this.add({id:'12', name: '大家结伴去旅游', text:'旅游',panel_id: 'wy-info-list-panel', valid: false,handler:goWYInfoListPage});
                this.add({id:'13', name: '房屋租售', text:'房屋租售', panel_id: 'wy-info-list-panel', valid: false,handler:goWYInfoListPage});
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


 