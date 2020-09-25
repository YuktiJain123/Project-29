function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  object=new Ground(400,200,50,20);
  stand= new Ground(400,100,50,10);
  
}

function draw() {
  background(255,255,255); 
  object.display();
  stand.display(); 
  drawSprites();
}