class Brick{
    constructor(x,y,width,height){
        this.index=0; //递增序号
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;
        this.angle = 0; //旋转的角度
        this.source_code = '';
        this.beauty_code = '';
        this.source_code_children = '';
        this.beauty_code_children = '';
        this.type = 'brick';
        this.css = '';
        this.is_dirty = false;
        this.cssId = '';
        this.depth = 0; //层级深度
        this.defaultConfig = {};
        this.children = []; //子元素
        this.parent = null; //父类
        this.inline = false; // inline 元素不能有子元素
        this.isFloat = false;
        this.floatDirection = false;
    }
    hookDefaultConfig(config){
        this.defaultConfig = config;
    }
    setIndex()
    getType(){
        return this.type;
    }
    getStyle(){
        return [this.cssId,this.css];
    }
    setStyle(cssId, css){
        this.cssId = cssId;
        this.css = css;
    }
    getX(){
        return this.x;
    }
    getY(){
        return this.y;
    }
    getWidth(){
        return this.w;
    }
    getHeight(){
        return this.h;
    }
    getAngle(){
        return this.angle;
    }
    setX(x){
        this.x = x;
    }
    setY(y){
        this.y = y;
    }
    setWidth(width){
        this.w = width;
    }
    setHeight(height){
        this.h = height;
    }
    rotate(angle){
        this.angle = angle;
    }
    compile(){
        
    }
    compileChildren(){
        for(let i=0; i<this.children.length; i++){
            this.children[i].compile();
        }
    }
    getChildrenSourceCode(){
        for(let i=0; i<this.children.length; i++){
            this.source_code_children += this.children[i].getSourceCode();
        }
        return this.source_code_children;
    }
    beautifyChildrenSourceCode(){
        for(let i=0; i<this.children.length; i++){
            this.source_code_children += this.children[i].beautifyCode();
        }
    }
    hasChild(){
        return this.children.length == 0? false:true;
    }
    beautifyCode(){
        if(!this.is_dirty && this.beauty_code != ''){
            return this.beauty_code;
        }
        // actual beautify work,every sub class should call its parent's 
        // beautifyCode() first.
    }
    isDirty(){
        return this.is_dirty;
    }
    setDirty(){
        this.is_dirty = true;
    }
    getSourceCode(){
        return this.source_code;
    }
    getBeautyCode(){
        return this.beauty_code;
    }
    addChild(brick){
        this.children.push(brick);
    }
    delChild(brick){
        for(let i=0; i<this.children.length; i++){
            if(this.children[i].type = brick.type &&
                this.children[i].x == brick.x && 
                this.children[i].y == brick.y && 
                this.children[i].width == brick.width &&
                this.children[i].height == brick.height){
                    this.children.splice(i,1);
                }
        }
    }

}

export default Brick;