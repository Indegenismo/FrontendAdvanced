import {BgView} from "./bgView";
import {BgModel} from "./bgModel";
import {Ctrl} from "../mvc/Ctrl";
import {stateMachine} from "../StateMachine.js";

window.stateMachine = stateMachine;

export class BgCtrl extends Ctrl {
    constructor() {
        super(new BgModel(), new BgView());

        stateMachine.observe('onBegin', () => {
            this.model.setWinText('Game is started');
        });

        stateMachine.observe('onProgress', () => {
            this.model.setWinText('Game is progress');
        });

        stateMachine.observe('onEnd', () => {
            this.model.setWinText('Game is finish');
        });
    }

    win() {
        this.model.setWinText();
    }
}