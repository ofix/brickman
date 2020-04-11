import {Brick} from "Brick";

class Table extends Brick {
    constructor(x,y,width,height){
        super(x,y,width,height);
        this.title = [];
        this.body = [];
        this.colWidth = width;
        this.colHeight = height;
        this.textAlign =[];
        this.src_head = '';
        this.src_body = '';
    }
    compile(){
        
    }
    emitHead(){
        for(let i=0; i<this.title.length;i++){
            this.src_head = '<th>'+this.title[i]+'</th>';
        }
    }
    emitBody(){
        for(let i=0; i<this.body.length; i++){
            
        }
    }
}