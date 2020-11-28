const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1;
var backgroundImage;

function preload(){

backgroundImage = loadImage("sprites/bg.png");


}


function setup(){
    var canvas = createCanvas(1800,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,300,55,55);
    box2 = new Box(800,300,55,55);
    box3 = new Box(600,270,55,55);
    box4 = new Box(800,270,55,55);
    box5 = new Box(700,200,55,55);
    
    pig1 = new pig(700,295);
    pig2 = new pig(700,270);

    log1 = new Log(700,280,270,PI/2);
    log2 = new Log(700,250,270,PI/2);
    log3 = new Log(650,200,150,PI/7);
    log4 = new Log(750,200,150,-PI/7);

    bird1 = new bird(200,300)
    


    ground = new Ground(900,height,1800,20)
}

function draw(){
    background(backgroundImage);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    
    ground.display();

    pig1.display();
    pig2.display();
    
    log1.display();
    log2.display();
    log3.display();
    log4.display();

    bird1.display();

}