const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2, ground;
var pig1;
var iron1,iron2;
var box3,box4,pig2;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1=new Stone(700,320,70,70);   
    box2=new Stone(820,320,70,70);
    ground=new Ground(600,height,1200,30);   
    pig1=new Pig(610,350);
    pig2=new Pig(550,220);
    box3=new Stone(910,240,70,70);
    box4=new Stone(1000,360,70,70);
    bird=new Hammer(100,200);
    iron1= new Iron(250,360,50,50);
    iron2 = new Iron(330,330,50,50)
   
}

function draw(){
    background("aqua");
    Engine.update(engine);
    box1.display();
    box2.display();
    
    ground.display();
    pig1.display();
    box3.display();
    box4.display();
    iron1.display();
    iron2.display();
    pig2.display();
    
    bird.display();
}

