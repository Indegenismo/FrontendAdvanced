import { GameItemCtrl } from "./GameItem/GameitemCtrl";
import {BgCtrl} from "./bg/bgCtrl";
var keys = {
    W: false,
    S: false,
    UP: false,
    DOWN: false
};
export class Game {
    
    constructor(){
    
        this.canvas = document.getElementById('game');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = 300;
        this.canvas.height = 300;
        this.items=[];
        
        this.mainCharacter = new GameItemCtrl('red', [0, 0, 10, 10]);
        this.bg = new BgCtrl();
        this.items.push(...[this.mainCharacter, this.bg]);
        
 
        this.items.push(this.mainCharacter)
        this.draw();
        // Key Codes
        var W = 87;
        var S = 83;

        // Keep track of pressed keys

        // Listen for keydown events
        document.addEventListener('keydown', function(e) {
            if (e.keyCode === W) {
                keys.W = true;
            }
            if (e.keyCode === S) {
                keys.S = true;
            }
        });

        // Listen for keyup events
        document.addEventListener('keyup', function(e) {
            if (e.keyCode === W) {
                keys.W = false;
            }
            if (e.keyCode === S) {
                keys.S = false;
            }
        });
    }
    movexKub(){
       this.bg.forEach((item)=>item.moveX())
    }
    changeColor(){
        
        this.items.forEach((item) => item.setNewColor())
    }
    
    
    draw(){
        if (keys.W) {
            this.mainCharacter.moveUp();
        }
        if (keys.S) {
            this.mainCharacter.moveDown();
        }
        if (this.mainCharacter.model.isWin()) {
            this.bg.win();
        }
        this.ctx.clearRect(0,0,300,300);
        this.items.forEach((item) => item.animate(this.ctx));
    
        // let x=10;
        // let y=10;
        // this.ctx.fillStyle = "green";
        // this.ctx.fillRect(x,y,30,30);
        // x +=1;
        // y=y+1
        requestAnimationFrame(()=>this.draw())
    }
    
}