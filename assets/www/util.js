// maybe use controller will be better

function changeCarouselItem(id){
    
    // Ext.getCmp('carousel-panel').setActiveItem(id,{ type: 'flip', direction: 'right' });
    Ext.getCmp('carousel-panel').setActiveItem(id,{type: 'slide', direction: 'left'});
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

function goAddComponentsPanel(){
    changeCarouselItem('add-components-panel'); 
}

function goSecondhandListPage(){
    changeCarouselItem('second-hand-list-panel');
}

function goSecondhandDetailPage(){
    changeCarouselItem('second-hand-detail-panel');
}