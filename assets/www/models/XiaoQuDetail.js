mzst.models.XiaoQuDetail = Ext.regModel("mzst.models.XiaoQuDetail", {
    fields: [
        {name: "id", type: "int", mapping: "infor_data.id"},
        {name: "image_url", type: "string", mapping: "infor_data.image_url"},
        {name: "title", type: "string", mapping: "infor_data.title"},
        {name: "article", type: "string", mapping: "infor_data.content"}
    ]
   /* proxy: {
        type: "contactstorage"
    } */
});



mzst.stores.xiaoqudetail = new Ext.data.Store({
    model: "mzst.models.XiaoQuDetail",
    id: 'store_xiaoqu_detail',
    autoLoad: true,
    data: data_from_mzst_xiaoqu_detail,
    
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

mzst.models.XiaoQuDetailReviews = Ext.regModel("mzst.models.XiaoQuDetailReviews", {
    fields: [
        {name: "username", type: "string", mapping: "review.username"},
        {name: "datetime", type: "string", mapping: "review.datetime"},
        {name: "content", type: "string", mapping: "review.content"}
    ]
   /* proxy: {
        type: "contactstorage"
    } */
});

mzst.stores.xiaoqudetailreviews = new Ext.data.Store({
    model: "mzst.models.XiaoQuDetailReviews",
    id: 'store_xiaoqu_detail_reviews',
    autoLoad: true,
    data: data_from_mzst_xiaoqu_detail_reviews,
    
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