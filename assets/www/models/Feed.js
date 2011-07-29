mzst.models.Feed = Ext.regModel("mzst.models.Feed", {
    fields: [
             {name: "id", type: "int", mapping: "feed_data.id"},
             {name: "username", type: "string", mapping: "feed_data.username"},
             {name: "image_url", type: "string", mapping: "feed_data.image_url"},
             {name: "description", type: "string", mapping: "feed_data.description"},
             {name: "datetime", type: "string", mapping: "feed_data.datetime"}
            
         ]
        /* proxy: {
             type: "contactstorage"
         } */
});

mzst.stores.feed = new Ext.data.Store({
    model: "mzst.models.Feed",
    id: 'store_feed',
    autoLoad: true,
    data: data_from_mzst_feed,
    
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