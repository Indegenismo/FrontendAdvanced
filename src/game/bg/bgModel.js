import {Model} from "../mvc/Model";
import {stateMachine} from "../StateMachine.js";

export class BgModel extends Model {
    setDefaultValues() {
        this.text = '';
    }

    setWinText(text) {
        this.text = text;
    }
}