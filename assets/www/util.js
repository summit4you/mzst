function changeCarouselItem(id){
    Ext.getCmp('carousel-panel').setActiveItem(id);
}

function gowyInfoListPage(){
    changeCarouselItem('wy-info-list-panel');
}

function goMainPage(){
    changeCarouselItem('main-panel');
}