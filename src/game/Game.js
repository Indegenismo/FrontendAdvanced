import { GameItemCtrl } from "./GameItem/GameitemCtrl.js";

export class Game {
    
    constructor(){
    
        this.canvas = document.getElementById('game');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = 300;
        this.canvas.height = 300;
        
        this.items=[];
        this.bg=[];
        this.items.push(new GameItemCtrl('red', [10,0,60,60]))
        this.bg.push(new GameItemCtrl('yellow',[0,0,60,60]))
        this.draw();
        
    }
    movexKub(){
       this.bg.forEach((item)=>item.moveX())
    }
    changeColor(){
        
        this.items.forEach((item) => item.setNewColor())
    }
  
    
    draw(){
        
        this.ctx.clearRect(0,0,300,300);
        this.items.forEach((item)=>item.snake(this.ctx));
        this.bg.forEach((item)=>item.kube(this.ctx))
        // let x=10;
        // let y=10;
        // this.ctx.fillStyle = "green";
        // this.ctx.fillRect(x,y,30,30);
        // x +=1;
        // y=y+1
        requestAnimationFrame(()=>this.draw())
    }
    
}