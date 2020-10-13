class box
{
    constructor(x,y,width,height)
    {
   var options={isStatic:false,
  
  friction:0.5,
  dencity:1.2
}
this.x=x;
this.y=y;
this.width = width;
this.height = height
this.body=Bodies.circle(this.x,this.y,this.width,this.height,options)
World.add(world,this.body);

    }
    display()
    {
var boxpos = this.body.position;

push()
translate(boxpos.x,boxpos.y)
rectMode(CENTER)
strokeWeight(3)
fill(255,0,255)
pop()
    }
}