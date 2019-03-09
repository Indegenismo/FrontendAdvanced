export class GameItemModel{
    constructor(){
        this.type = '';
        this.rectParams = [0,0,0,1]
    }
    setType(type){
        this.type = type;
    }
    setRandomColor(){
        const color = Math.floor(Math.random()*1000000);
        this.type = `#${color}`;
    }
}