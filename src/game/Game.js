import { GameItemCtrl } from "./GameItem/GameitemCtrl.js";


export class Game {
    
    constructor(){
    
        this.canvas = document.getElementById('game');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = 300;
        this.canvas.height = 300;
        
        this.items=[];
        this.items.push(new GameItemCtrl('red', [0,0,10,10]))
        this.draw();
        
    }

    changeColor(){
        // const color = Math.floor(Math.random()*1000000);
        this.items.forEach((item) => item.setNewColor())
    }
    draw(){
        this.ctx.clearRect(0,0,300,300);
        this.items.forEach((item)=>item.animate(this.ctx));
        
        
        requestAnimationFrame(()=>this.draw())
    }
}