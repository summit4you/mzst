Ext.namespace('Ext.ux.touch');

Ext.ux.touch.ImageListField = Ext.extend(Ext.form.Field, {
    itemsCount: undefined,
    store: mzst.stores.selectneighbor,
    renderTpl: [
                '<tpl if="label">',
                    '<div class="x-form-label"><span>{label}</span></div>',
                '</tpl>',
                '<tpl if="fieldEl">',
                    '<div class="x-form-field-container">',
                        '<div id="{inputId}" class="{fieldCls} x-input-el {cls} x-rating-field" name="{name}" ',
                        '<tpl if="tabIndex">tabIndex="{tabIndex}" </tpl>',
                        '<tpl if="style">style="{style}" </tpl>',
                        '>',
                        '<div  class="x-image-items"',
                            '><ul class="x-image-item">',
                            '<tpl for=".">',
                            '<li index="{[xindex - 1]}" class="cls">{id}</li>',
                        '</tpl><li><a href="javascript:;" onclick="goSelectNeighborListPage();" class="config_setting">选择邻居</a></li></ul></div>',
                       '</div>',
                       '</div>',
                       '</tpl>'],
    tpl: ['<tpl for=".">',
          '<tpl if="checked"><li index="{[xindex]}" class="cls x-image-item"><img src="{image_url}"/></li></tpl>',
          '</tpl><li><a href="javascript:;" onclick="goSelectNeighborListPage();" class="config_setting">选择邻居</a></li>'],
          
    initComponent: function(){
        Ext.applyIf(this.renderData, {
            disabled        :   this.disabled,
            cls             :   this.cls,
            fieldCls        :   'x-input-' + this.inputType + (this.inputCls ? ' ' + this.inputCls: ''),
            fieldEl         :   !this.fieldEl && this.autoCreateField,
            inputId         :   Ext.id(),
            label           :    this.label,
            labelAlign      :   'x-label-align-' + this.labelAlign,
            name            :   this.getName(),
            required        :   this.required,
            style           :   this.style,
            tabIndex        :   this.tabIndex,
            inputType       :   this.inputType,
            useMask         :   this.useMask,
            items           :   this.items,
            showClear       :   this.showClear,
            clearCls        :   this.clearCls
        });
        
        Ext.applyIf(this.renderSelectors, {
            imageEl: '.x-image-item',
        });
        this.all = new Ext.CompositeElementLite();
        Ext.ux.touch.ImageListField.superclass.initComponent.call(this);
       
    },
    /**
     * @private
     */
    initRenderData: function() {
       // Ext.ux.touch.ImageListField.initRenderData.call(this, arguments);
        
       
        
        return this.renderData;
    },
    
 // inherit docs
    afterRender: function(){
        Ext.ux.touch.ImageListField.superclass.afterRender.call(this);
        this.refresh();
      
        
    },
    
    refresh: function() {
        if (!this.rendered) {
            return;
        }
        
        records = mzst.stores.selectneighbor.getRange();
        
      
       
        this.tpl.overwrite(this.imageEl, this.collectData(records, 0));
        
        this.all.fill(Ext.query("li.x-image-item",this.imageEl.dom));
        
    },
    prepareData: function(data, index, record) {
        if (record) {    
            Ext.apply(data, this.prepareAssociatedData(record));            
        }
        return data;
    },
    
   
    
    
    prepareAssociatedData: function(record, ids) {
        
        ids = ids || [];
        
        var associations     = record.associations.items,
            associationCount = associations.length,
            associationData  = {},
            associatedStore, associatedName, associatedRecords, associatedRecord,
            associatedRecordCount, association, internalId, i, j;
        
        for (i = 0; i < associationCount; i++) {
            association = associations[i];
            
            
            associatedStore = record[association.storeName];
            
            
            associationData[association.name] = [];
            
            
            if (associatedStore && associatedStore.data.length > 0) {
                associatedRecords = associatedStore.data.items;
                associatedRecordCount = associatedRecords.length;
            
                
                for (j = 0; j < associatedRecordCount; j++) {
                    associatedRecord = associatedRecords[j];
                    internalId = associatedRecord.internalId;
                    
                    
                    
                    if (ids.indexOf(internalId) == -1) {
                        ids.push(internalId);
                        
                        associationData[association.name][j] = associatedRecord.data;
                        Ext.apply(associationData[association.name][j], this.prepareAssociatedData(associatedRecord, ids));
                    }
                }
            }
        }
        
        return associationData;
    },

    
    collectData : function(records, startIndex){
        var r = [],
            i = 0,
            len = records.length;

        for(; i < len; i++){
            r[r.length] = this.prepareData(records[i].data, startIndex + i, records[i]);
        }
        
        return r;
    },
});
