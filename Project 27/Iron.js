class Iron
{
    constructor(x,y,width,height)
    {
        var option={
            'restitution' : 0.5,
            'friction': 0.8,
            'density':4
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
        
        this.width=width;
        this.height=height;
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("brown");
        rect(0,0,this.width,this.height);
        pop();     
    }
}

