export class GameItemModel{
    constructor(){
        
        this.type = '';
        this.position = [];
        
         
    }
    setType(type){
        this.type = type;
    }
    setPosition(position){
        this.position=position
    }
    
    setRandomColor(){
        const color = Math.floor(Math.random()*1000000);
        this.type = `#${color}`;
        
    }
     
     moveKube(){
        
        
        this.position.x += 1;
        
     }
      
}