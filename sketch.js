
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	bI=loadImage("boy.png")
	tI=loadImage("tree.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	boy=createSprite(155,540,30,50)
	boy.addImage(bI)
	boy.scale=0.15
		
	tree=createSprite(705,400,30,50)
	tree.addImage(tI)
	tree.scale=0.6

	//Create the Bodies Here.
    Ground=new ground(width/2,600,800,30)

	Stone=new stone(300,300,30)
	m1=new mango(600,400,30)
	m2=new mango(420,375,30)
    m3=new mango(490,180,30)
	s1   = new Ss(Stone.body,{x:60,y:450});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  detectollision(Stone, m1)
  detectollision(Stone, m2)
  detectollision(Stone, m3)
  
  Ground.display();
  Stone.display();
  m1.display();
  m2.display();
  m3.display();
  s1.display();
  
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(Stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    s1.fly();   
}
function detectollision(stone, mango){
	//mongoBodyPosition=mango.body. position
	//stoneBodyPosition=stone.body.position
	
	var distance=dist(stone.body.position.x, stone.body.position.y, mango.body. position.x, mango.body. position.y) 
	if(distance<=mango.r +stone.r){
	Matter.Body.setStatic(mango.body,false);
	}
	}
function keyPressed() {
	if (keyCode === 32) {
	Matter.Body.setPosition(Stone.body, {x:60, y:450})
	s1.attach(Stone.body); 
}
}
