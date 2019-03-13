import {BgView} from "./bgView";
import {BgModel} from "./bgModel";
import {Ctrl} from "../mvc/Ctrl";

export class BgCtrl extends Ctrl {
    constructor() {
        super(new BgModel(), new BgView())
    }

    win() {
        this.model.setWinText();
    }
}