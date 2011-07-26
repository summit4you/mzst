// maybe use controller will be better

function changeCarouselItem(id){
    Ext.getCmp('carousel-panel').setActiveItem(id,{ type: 'flip', direction: 'right' });
}

function goWYInfoListPage(){
    changeCarouselItem('wy-info-list-panel');
}

function goWYInfoDetailPage(){
    changeCarouselItem('wy-info-detail-panel');
}

function goMainPage(){
    changeCarouselItem('main-panel');
}