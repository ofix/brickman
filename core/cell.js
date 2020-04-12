import {Brick} from "Brick";

class Cell extends Brick{
    constructor(x,y,width,height){
        super(x,y,width,height);
        this.type = 'cell';
    }
    compile(){
        super.compile();
        this.source_code = '<td>'+this.children_source_code+'</td>';
    }
}