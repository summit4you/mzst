mzst.models.Neighbor = Ext.regModel("mzst.models.Neighbor", {
    fields: [
             {name: "id", type: "int", mapping: "neighbor_data.id"},
             {name: "username", type: "string", mapping: "neighbor_data.username"},
             {name: "image_url", type: "string", mapping: "neighbor_data.image_url"},
             {name: "description", type: "string", mapping: "neighbor_data.description"}
         ]
        /* proxy: {
             type: "contactstorage"
         } */
});

mzst.stores.neighbor = new Ext.data.Store({
    model: "mzst.models.Neighbor",
    id: 'store_neighbor',
    autoLoad: true,
    data: data_from_mzst_neighbor,
    
    proxy: {
       // JSON-P FTW
       //type: 'scripttag',
       // If you're offline, uncomment the two lines below and comment the line above and the line with the Instagram URL.
        type: 'memory',
        
        //url: 'https://api.instagram.com/v1/tags/tea/media/recent?access_token=2260821.f59def8.7fe0d31e791e4e62a00fc8f44b831140',
        reader: {
            type: 'json',
            // The root of the JSON response from which we will iterate over is called "data".  
            // See an example of the JSON response in models/data_from_instagrams.json
            root: "data"
        }
    }
});

mzst.models.NeighborDetail = Ext.regModel("mzst.models.NeighborDetail", {
    fields: [
             {name: "id", type: "int", mapping: "neighbor_data.id"},
             {name: "username", type: "string", mapping: "neighbor_data.username"},
             {name: "image_url", type: "string", mapping: "neighbor_data.image_url"},
             {name: "description", type: "string", mapping: "neighbor_data.description"}
         ]
        /* proxy: {
             type: "contactstorage"
         } */
});

mzst.stores.neighbordetail = new Ext.data.Store({
    model: "mzst.models.NeighborDetail",
    id: 'store_neighbor_detail',
    autoLoad: true,
    data: data_from_mzst_neighbor_detail,
    
    proxy: {
       // JSON-P FTW
       //type: 'scripttag',
       // If you're offline, uncomment the two lines below and comment the line above and the line with the Instagram URL.
        type: 'memory',
        
        //url: 'https://api.instagram.com/v1/tags/tea/media/recent?access_token=2260821.f59def8.7fe0d31e791e4e62a00fc8f44b831140',
        reader: {
            type: 'json',
            // The root of the JSON response from which we will iterate over is called "data".  
            // See an example of the JSON response in models/data_from_instagrams.json
            root: "data"
        }
    }
});


mzst.models.LJ = Ext.regModel('mzst.models.LJ', {
    fields: [
        {name: 'id', type: 'int'},
        {name: 'username', type: 'string'},
        {name: 'uid', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'namestatus', type: 'string'},
        {name: 'groupid', type: 'string'},
        {name: 'resideprovince', type: 'string'},
        {name: 'residecity', type: 'string'},
        {name: 'note', type: 'string'},
        {name: 'spacenote', type: 'string'},
        {name: 'sex', type: 'string'},
        {name: 'p', type: 'string'},
        {name: 'c', type: 'string'},
        {name: 'isfriend', type: 'int'},
        {name: 'image_url', type: 'string'}
    ],
});

Ext.data.ProxyMgr.registerType("mzstljstorage",
        Ext.extend(Ext.data.Proxy, {
            params: {
                uid: "",
                lid: "",
                page: 1,
            },
            totalCount: -1,
            create: function(operation, callback, scope) {
            },
            read: function(operation, callback, scope) {
                
                var thisProxy = this;
                if (this.totalCount==-1)
                {
                    this.params.page = 1;
                }else 
                {
                   
                    if (mzst.models.lj.getCount()<this.totalCount)
                        this.params.page = this.params.page+1;
                    else
                        return ;
                }
                if (this.params.uid=="") 
                {
                    this.params.uid = mzst.models.space.getAt("0").get("uid");
                    this.params.lid = mzst.models.space.getAt("0").get("lid")
                }
               
                Ext.util.JSONP.request({
                    url: getDataFrom("lj.php"),
                    callbackKey: 'callback',
                    scope: this,    // it is important
                  
                    params: this.params,
                    scriptTag: true,
                    callback: function(data) {
                        
                        var records = [];
                        // add the orign data
                        if (mzst.models.lj.getCount()>0)
                            for (var i=0; i<mzst.models.lj.getCount(); i++)
                                   records.push(mzst.models.lj.getAt(i));
                        for (var i=0; i<data.length-1; i++){
                            
                            var record = new mzst.models.LJ({
                                username: data[i].username,
                                uid: data[i].uid,
                                name: data[i].name,
                                namestatus: data[i].namestatus,
                                groupid: data[i].groupid,
                                resideprovince: data[i].resideprovince,
                                residecity: data[i].residecity,
                                note: data[i].note,
                                spacenote: data[i].spacenote,
                                sex: data[i].sex,
                                p: data[i].p,
                                c: data[i].c,
                                isfriend: data[i].isfriend,
                                id: data[i].id,
                                image_url: data[i].image_url
                            });
                            records.push(record);
                        }
                      
                       this.totalCount = data[data.length-1].count;
                       
                       //return model instances in a result set
                       operation.resultSet = new Ext.data.ResultSet({
                           records: records,
                           total  : records.length,
                           loaded : true
                       });
                       //announce success
                       operation.setSuccessful();
                       operation.setCompleted();
                       
                      
                       
                       //finish with callback
                       if (typeof callback == "function") {
                           callback.call(scope || thisProxy, operation);
                       }
                       
                    }
                });
            },
            update: function(operation, callback, scope) {
            },
            destroy: function(operation, callback, scope) {
            }
        })
    );

mzst.models.lj = new Ext.data.Store({
    model: "app.models.LJ",
    proxy: {
        type: "mzstljstorage",
        model: "app.models.LJ"
    }
});