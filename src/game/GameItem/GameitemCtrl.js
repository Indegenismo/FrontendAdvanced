import {GameItemModel} from './GameItemModel'
import {GameItemView} from './GameItemVue'
import {Ctrl} from "../mvc/Ctrl";
export class GameItemCtrl extends Ctrl {
    constructor(type) {
        super(new GameItemModel(), new GameItemView());

        this.model.setType(type);
    }
        
    setNewColor(){
        this.model.setRandomColor();
    }
    animate(ctx) {
        super.animate(ctx);
 
        if (this.model.isWin()) {
            this.model.setDefaultValues();
        }
     }
    moveUp(){
         this.model.moveUp();
    }
    moveDown(){
        this.model.moveDown()
    }
    animate(ctx) {
        super.animate(ctx);
 
        if (this.model.isWin()) {
            this.model.setDefaultValues();
        }
     }
    
}