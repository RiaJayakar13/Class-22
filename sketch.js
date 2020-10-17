const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball1,ball2;

function setup()
{
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

 var groundprop = {
isStatic: true
 }   
ground=Bodies.rectangle(200,380,400,20,groundprop);
World.add(world,ground); 

var ballprop = {
restitution: 3.0
}

ball1=Bodies.circle(200,150,20,ballprop);
World.add(world,ball1);

ball2=Bodies.circle(100,150,20,ballprop);
World.add(world,ball2);

}

function draw()
{
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
 strokeWeight(4);
 stroke("yellow");   
fill("blue")
    rect(ground.position.x,ground.position.y,400,20);
ellipseMode(RADIUS);
strokeWeight(4);
stroke("red");
fill("purple");
ellipse(ball1.position.x,ball1.position.y,20,20);
ellipse(ball2.position.x,ball2.position.y,20,20);

drawSprites();
}