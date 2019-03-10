import {GameItemModel} from './GameItemModel'
import {GameItemVue} from './GameItemVue'

export class GameItemCtrl{
    constructor(type,position){
        
            this.model = new GameItemModel();
            this.position = new GameItemModel();
            this.Vue = new GameItemVue(this.model);
            this.model.setType(type);
            this.position.setPosition(position)
        }
        
        setNewColor(){
            this.model.setRandomColor();
        }
        snake(ctx){
           this.Vue.snake(ctx);
    }
    moveX(){
         this.position.moveKube();
    }
    kube(ctx){
        this.Vue.kube(ctx);
    }
    
}