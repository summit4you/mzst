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