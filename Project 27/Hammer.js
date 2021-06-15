class Hammer
{
    constructor(x,y)
    {
        var option={
            'restitution' :2,
            'friction': 1.0,
            'density': 0.5
        }
        this.body=Bodies.rectangle(x,y,70,20,option);
        World.add(world,this.body);
        
        this.width=70;
        this.height=20;
    }

    display()
    {
        var pos=this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("green");
        rect(0,0,this.width,this.height);
        pop();   
        
    }
}