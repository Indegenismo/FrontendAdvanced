import {GameItemModel} from './GameItemModel'
import {GameItemView} from './GameItemVue'
import {Ctrl} from "../mvc/Ctrl";
import {stateMachine} from "../StateMachine";
export class GameItemCtrl extends Ctrl {
    constructor(type) {
        super(new GameItemModel(), new GameItemView());

        this.model.setType(type);

        // Listen for keydown events
        document.addEventListener('keydown', (e) => {
            if (e.keyCode === 87) {
                this.moveUp();
            }
            if (e.keyCode === 83) {
                this.moveDown();
            }

            if (stateMachine.can('start')) {
                stateMachine.start();
            }
        });
    }

    moveUp() {
        this.model.moveUp();
    }

    moveDown() {
        this.model.moveDown();
    }

    setNewColor() {
        this.model.setRandomColor();
    }

    animate(ctx) {
       super.animate(ctx);

       if (this.model.isWin()) {
           this.model.setDefaultValues();

           if (stateMachine.can('stop')) {
               stateMachine.stop();
           }
       }
    }
}