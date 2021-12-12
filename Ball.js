class Ball{

    constructor(x,y,r){
        this.x=x;
        this.y=y;
        this.r=r;
    }

    show(){
        circle(this.x,this.y,this.r)
    }
}