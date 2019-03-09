import {GameItemModel} from './GameItemModel'
import {GameItemVue} from './GameItemVue'

export class GameItemCtrl{
    constructor(type,reactParams){
            this.model = new GameItemModel();
            this.Vue = new GameItemVue(this.model);

            this.model.setType(type);
        }
        setNewColor(){
            this.model.setRandomColor();
        }
        animate(ctx){
           this.Vue.animate(ctx)
        
    }
}