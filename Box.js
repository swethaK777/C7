class Box
  {
    constructor(x,y,w,h)
    {
        this.w=w;
        this.h=h;
        this.x=x;
        this.y=y;
        this.v=3;
    }
    
    display(){

        rect(this.x,this.y,this.w,this.h)
    }


  }
