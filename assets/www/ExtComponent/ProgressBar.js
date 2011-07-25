mzst.ProgressBar = Ext.extend(Ext.Component, {
    /**
     * @cfg {Number} value The default value for the progress bar. This should range
     * between 0 (minimum and 100 (maximum). Defaults to <tt>0</tt>.
     */
    id: 'mzst_progressbar',
    
    value: 100,
    
    /**
     * @cfg {String} text Text to show in the progress bar. Defaults to <tt>''</tt>.
     */
    text: '您贴身的小区生活工具',
    
    height: 34,
    
    width: 300,
    
    canvas_height: 60,
    
    canvas_width: 350,
    
    initial_x : 20,

    initial_y : 20,
    
    res : 0,
    
    autoDestory: true,

    
    renderTpl: new Ext.XTemplate(
           '<div <tpl if="id">id="{id}" </tpl>class="x-progress-div {baseCls} {cls} {cmpCls}<tpl if="ui">{uiBase}-{ui}</tpl>"<tpl if="style"> style="{style}"</tpl>>',
           '<div style=" margin-left: 70px"><img src="theming/images/logo.jpg" alt="Kitchen Sink"></div>',
           '<div><canvas class="x-progress-canvas" <tpl if="id">id="{id}" </tpl> <tpl if="width">width="{width}" </tpl>  <tpl if="height">height="{height}" </tpl> ></canvas></div>',
           '<span class="x-progress-text">{text}</span></div>',
           {
            compiled: true
        }),
    
    initComponent: function(){
        
        // Called during component initialization
        
        // Config object has already been applied to 'this' so properties can 
        // be overriden here or new properties (e.g. items, tools, buttons) 
        // can be added, eg:
        // Ext.apply(this, {
        //     propA: 3
        // });
        
        // Before parent code
        
        // Call parent (required)
        
        Ext.applyIf(this.renderData, {  
            width: this.canvas_width,  
            height: this.canvas_height,
            text: this.text
        }); 
        
        Ext.applyIf(this.renderSelectors, {
            textEl: '.x-progress-text',
            canvasEl: '.x-progress-canvas'
        });
        
        this.addEvents(
                /**
                 * @event animateend
                 * Fires when the progress bar finishes an animation.
                 * @param {Ext.ProgressBar} this
                 */
                'animateend',
                /**
                 * @event animatestart
                 * Fires when the progress bar begins an animation.
                 * @param {Ext.ProgressBar} this
                 */
                'animatestart',        
                /**
                 * @event change
                 * Fires when the value of the progress bar changes.
                 * @param {Ext.ProgressBar} this
                 * @param {Number} value The new value
                 * @param {Number} old The old value
                 */
                'change', 
                
                'complete');
        
        mzst.ProgressBar.superclass.initComponent.apply(this, arguments);
        
        // After parent code
        // e.g. install event handlers on rendered component
    },
    // Override other inherited methods 
    onRender: function(){
 
        // Before parent code
 
        // Call parent (required)
        mzst.ProgressBar.superclass.onRender.apply(this, arguments);
 
        // After parent code
        
      


 
    },
    
    // inherit docs
    afterRender: function(){
        mzst.ProgressBar.superclass.afterRender.call(this);
        this.setText(this.text);
        this.setContext();
        
    },
    
    /**
     * Sets the text for the progress bar.
     * @param {String} text The text to set.
     * @return {Ext.ProgressBar} this
     */
    setText: function(text){
        this.textEl.update(text);
        return this;
    },
    
    setContext: function(){
        Ext.apply(this, {context:this.canvasEl.dom.getContext('2d')});
        //this.context = this.canvasEl.dom.getContext('2d');
        this.radius = this.height/2;
        
        if (!this.context) {
            return;
        }
        // set font
        this.context.font = "16px Verdana";
        // Blue gradient for progress bar

        var progress_lingrad = this.context.createLinearGradient(0,this.initial_y+this.height,0,0);
        progress_lingrad.addColorStop(0, '#4DA4F3');
        progress_lingrad.addColorStop(0.4, '#ADD9FF');
        progress_lingrad.addColorStop(1, '#9ED1FF');
        this.context.fillStyle = progress_lingrad;
        
        this.res = setInterval(this.beginDraw, 30, this);
        
        return this;
    },
    
    beginDraw: function(obj){
        
        obj.value+=1;
     // Clear everything before drawing
        
        obj.context.clearRect(obj.initial_x-5,obj.initial_y-5,obj.width+15,obj.height+15);
        obj.progressLayerRect(obj.context, obj.initial_x, obj.initial_y, obj.width, obj.height, obj.radius);
        obj.progressBarRect(obj.context, obj.initial_x, obj.initial_y, obj.value*obj.width/100, obj.height, obj.radius, obj.width);
        obj.progressText(obj.context, obj.initial_x, obj.initial_y, obj.value, obj.height, obj.radius, obj.width );
        if (obj.value>=100) {
            clearInterval(obj.res);
            obj.fireEvent('complete', this);
        }

    },
    roundRect: function(ctx, x, y, width, height, radius){
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.arc(x+width-radius, y+radius, radius, -Math.PI/2, Math.PI/2, false);
        ctx.lineTo(x + radius, y + height);
        ctx.arc(x+radius, y+radius, radius, Math.PI/2, 3*Math.PI/2, false);
        ctx.closePath();
        ctx.fill();
    },
    
    roundInsetRect: function roundInsetRect(ctx, x, y, width, height, radius) {

        ctx.beginPath();
       // Draw huge anti-clockwise box
        ctx.moveTo(1000, 1000);
        ctx.lineTo(1000, -1000);
        ctx.lineTo(-1000, -1000);
        ctx.lineTo(-1000, 1000);
        ctx.lineTo(1000, 1000);
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.arc(x+width-radius, y+radius, radius, -Math.PI/2, Math.PI/2, false);
        ctx.lineTo(x + radius, y + height);
        ctx.arc(x+radius, y+radius, radius, Math.PI/2, 3*Math.PI/2, false);
        ctx.closePath();
        ctx.fill();

    },

    progressLayerRect: function(ctx, x, y, width, height, radius){
        ctx.save();
        // Set shadows to make some depth
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 5;
        ctx.shadowColor = '#666';
        // Create initial grey layer
        ctx.fillStyle = 'rgba(189,189,189,1)';
        this.roundRect(ctx, x, y, width, height, radius);
        
     // Overlay with gradient
        ctx.shadowColor = 'rgba(0,0,0,0)'
        var lingrad = ctx.createLinearGradient(0,y+height,0,0);
        lingrad.addColorStop(0, 'rgba(255,255,255, 0.1)');
        lingrad.addColorStop(0.4, 'rgba(255,255,255, 0.7)');
        lingrad.addColorStop(1, 'rgba(255,255,255,0.4)');
        ctx.fillStyle = lingrad;
        this.roundRect(ctx, x, y, width, height, radius);
        ctx.fillStyle = 'white';

        //roundInsetRect(ctx, x, y, width, height, radius);



        ctx.restore();


    },
    progressBarRect: function (ctx, x, y, width, height, radius, max) {
     // var to store offset for proper filling when inside rounded area
        var offset = 0;
        ctx.beginPath();
        if (width<radius) {
            offset = radius - Math.sqrt(Math.pow(radius,2)-Math.pow((radius-width),2));
            ctx.moveTo(x + width, y+offset);
            ctx.lineTo(x + width, y+height-offset);
            ctx.arc(x + radius, y + radius, radius, Math.PI - Math.acos((radius - width) / radius), Math.PI + Math.acos((radius - width) / radius), false);
        }
        else if (width+radius>max) {
            offset = radius - Math.sqrt(Math.pow(radius,2)-Math.pow((radius - (max-width)),2));
            ctx.moveTo(x + radius, y);
            ctx.lineTo(x + width, y);
            ctx.arc(x+max-radius, y + radius, radius, -Math.PI/2, -Math.acos((radius - (max-width)) / radius), false);
            ctx.lineTo(x + width, y+height-offset);
            ctx.arc(x+max-radius, y + radius, radius, Math.acos((radius - (max-width)) / radius), Math.PI/2, false);
            ctx.lineTo(x + radius, y + height);
            ctx.arc(x+radius, y+radius, radius, Math.PI/2, 3*Math.PI/2, false);
        }
        else {
            ctx.moveTo(x + radius, y);
            ctx.lineTo(x + width, y);
            ctx.lineTo(x + width, y + height);
            ctx.lineTo(x + radius, y + height);
            ctx.arc(x+radius, y+radius, radius, Math.PI/2, 3*Math.PI/2, false);
        }
        ctx.closePath();
        ctx.fill();

        // draw progress bar right border shadow
        if (width<max-1) {
            ctx.save();
            ctx.shadowOffsetX = 1;
            ctx.shadowBlur = 1;
            ctx.shadowColor = '#666';
            if (width+radius>max)
              offset = offset+1;
            ctx.fillRect(x+width,y+offset,1,this.height-offset*2);
            ctx.restore();
        }

    },
    progressText: function (ctx, x, y, width, height, radius, max) {
        ctx.save();
        ctx.fillStyle = 'white';
        var text = this.value+"%";
        var text_width = ctx.measureText(text).width;
        var text_x = x+width-text_width-radius/2;
        if (width<=radius+text_width) {
            text_x = x+radius/2;
        }
        ctx.fillText(text, text_x, y+22);
        ctx.restore();
    },
    
    destroy: function(){
        
        mzst.ProgressBar.superclass.destroy.call(this);
    }

});

//register xtype to allow for lazy initialization
Ext.reg('mzstprogressbartype', mzst.ProgressBar);
