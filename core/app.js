class App{
    constructor(){
        this.name = 'brickman';
        this.version = '1.0.0';
        this.author = ['ofix'];
        this.birthday = '2020-04-11';
        this.global_config = {};
        this.bricks = []; //所有的brick对象,hash对象，按照
        this.source_code = [];
        this.beauty_code = [];
    }
    setGlobalConfig(config){
        this.global_config = config;
    }
    getGlobalConfig(){
        return this.global_config;
    }
    getBrickSourceCode(index){

    }
    compile(){
        for(let i=0; i<this.bricks.length; i++){
            this.bricks[i].compile();
        }
    }
    


}