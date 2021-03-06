import { GameItemCtrl } from "./GameItem/GameitemCtrl";
import {BgCtrl} from "./bg/bgCtrl";
import {stateMachine} from "./StateMachine.js";
var keys = {
    W: false,
    S: false,
    UP: false,
    DOWN: false
};
export class Game {
    constructor() {
        const config = JSON.parse(window.localStorage.getItem('config'));

        // console.log(config['userName']);

        this.canvas = document.getElementById('game');
        this.ctx = this.canvas.getContext('2d');

        this.canvas.width = 300;
        this.canvas.height = 300;

        this.items = [];

        this.mainCharacter = new GameItemCtrl('red', [0, 0, 10, 10]);
        this.bg = new BgCtrl();
        this.items.push(...[this.mainCharacter, this.bg]);

        this.draw();
    }

    changeColor() {
        this.items.forEach((item) => item.setNewColor());
    }

    draw() {
        this.ctx.clearRect(0, 0, 300, 300);
        this.items.forEach((item) => item.animate(this.ctx));

        requestAnimationFrame(() => this.draw());
    }
}