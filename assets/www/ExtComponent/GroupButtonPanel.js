mzst.GroupButtonPanel = Ext.extend(Ext.Panel, {
    column_item: 3,
    scroll: 'vertical',
    button_list: [],
    container_list: [],
    button_size: 100,
    layout: {
        type: 'vbox'
        },
    initComponent: function(){
       
        
        mzst.GroupButtonPanel.superclass.initComponent.apply(this, arguments);
    },
 // Override other inherited methods 
    onRender: function(){
 
        // Before parent code
        this.addButton(new Ext.Button({iconMask: true, ui: 'plain', iconCls: 'add', width:'100', height: '100',text:'添加'}), '添加');
        this.addButton(new Ext.Button({ text:'物业信息', badgeText: '12', handler: goWYInfoListPage }), '物业信息');
        this.addButton(new Ext.Button({ text:'二手物品交换', badgeText: '3' }), '二手物品交换');
        this.addButton(new Ext.Button({ text:'生活便利电活' , badgeText: '4'}), '生活便利电活');
        this.addButton(new Ext.Button({ text:'小区活动' , badgeText: '1'}), '小区活动');
        this.addButton(new Ext.Button({ text:'子女教育交流' }), '子女教育交流');
        this.addButton(new Ext.Button({ text:'周边商讯点评' }), '周边商讯点评');
        this.addButton(new Ext.Button({ text:'灌水', badgeText: '23' }), '灌水');
        this.addButton(new Ext.Button({ text:'家政服务', badgeText: '2' }), '家政服务');
        
       
        
        // Call parent (required)
        mzst.GroupButtonPanel.superclass.onRender.apply(this, arguments);
 
        // After parent code
    },
 // inherit docs
    afterRender: function(){
        mzst.GroupButtonPanel.superclass.afterRender.call(this);
    },
    
    addButton: function(button_cnt, name){
        this.button_list.push({obj:button_cnt, id:name});
        if(button_cnt.width != button_cnt.height || size!=this.button_size){   // to be Square
            var size = (button_cnt.width>button_cnt.height)?button_cnt.width:button_cnt.height;
           
            if (size>this.button_size){
                
                this.button_size = size;
                for (var i=0; i<this.button_list.length-1;i++){
                    Ext.apply(this.button_list[i].obj,{width:this.button_size, height:this.button_size});
                }
                
            }
            Ext.apply(this.button_list[this.button_list.length-1].obj,{width:this.button_size, height:this.button_size});
        }
        if (this.button_list.length%this.column_item==1){
        
            this.container_list.push(new Ext.Container({height: this.button_size+10,width: 3*this.button_size+40, layout: 'hbox', align: 'stretch',}));
            this.add(this.container_list[this.container_list.length-1]);
            if (this.button_list.length==1){
                this.container_list[this.container_list.length-1].add(button_cnt);
            }else{
                this.container_list[this.container_list.length-2].remove(this.button_list[0].obj);
                this.container_list[this.container_list.length-2].add(button_cnt);
                this.container_list[this.container_list.length-1].add(this.button_list[0].obj);
            }
                  
        }else{
            this.container_list[this.container_list.length-1].remove(this.button_list[0].obj);
            this.container_list[this.container_list.length-1].add(button_cnt);
            this.container_list[this.container_list.length-1].add(this.button_list[0].obj);
        }
    },
   deleteButton: function(id){
       var obj = null;
       for (var i=1; i<this.button_list.length;i++){
           if (this.button_list[i].id==id){
               obj = this.button_list[i].obj;
               this.button_list.splice(i,1);
               break;
           }
      }
      if (obj)
          this.container_list[this.container_list.length-1].remove(obj);
      if (this.button_list.length%this.column_item==0)
      { 
          this.container_list[this.container_list.length-2].remove(obj);
          this.container_list[this.container_list.length-2].add(this.button_list[0].obj);
          this.container_list.splice(this.container_list.length-1,1);
      }
   }
});

//register xtype to allow for lazy initialization
Ext.reg('mzstgroupbuttonpaneltype', mzst.GroupButtonPanel);
