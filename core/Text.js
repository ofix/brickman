import {Brick} from "Brick";

class Text extends Brick {
    constructor(x,y,width,height,text){
        super(x,y,width,height);
        this.type = 'text';
        this.text =text;
        this.fontSize = 16;
        this.fontFamily = '宋体';
        this.inline = true;
    }
    compile(){
        if(this.css != ''){
            this.code = '<div>'+this.text+'</div>';
        }else{
            this.code = '<div>'+this.text+'</div>';
        }        
    }
}