const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 
const Constraint = Matter.Constraint 
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  object=new Ground(400,200,50,20);
  stand= new Ground(400,100,50,10);
  
}

function draw() {
  engine = Engine.create();
   world = engine.world;
  background(255,255,255); 
  object.display();
  stand.display(); 
  drawSprites();
}