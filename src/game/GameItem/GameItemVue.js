export class GameItemVue{
    constructor(model){
        this.model = model;
        
    }
    snake(ctx){
        ctx.fillStyle = this.model.type;
        ctx.fillRect.apply(ctx,[10,10,50,50])
    }
    kube(ctx){
        
        ctx.fillStyle= this.model.type ;
        ctx.fillRect(this.model.position.x,0,30,30);
    }
}