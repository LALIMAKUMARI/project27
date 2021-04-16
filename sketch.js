
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1200,1200);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

   roof = new Roof(590,430,1200,70);
  // bob1 = new Bob(150,630,50);
   bob1 = new Bob(300,630,50);
   bob2 = new Bob(400,630,50);
   bob3 = new Bob(500,630,50);
   bob4 = new Bob(600,630,50);
   bob5 = new Bob(700,630,50);

   rope1 = new Rope(bob1.body,{x:300,y:430})
   rope2 = new Rope(bob2.body,{x:400,y:430})
   rope3 = new Rope(bob3.body,{x:500,y:430})
   rope4 = new Rope(bob4.body,{x:600,y:430})
   rope5 = new Rope(bob5.body,{x:700,y:430})
	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0,255,255);
	fill("red");
	text(mouseX+" "+mouseY,mouseX,mouseY);

	roof.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();


	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
  
  drawSprites();
 
}

function keyPressed(){
    if (keyCode===UP_ARROW) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-30,y:-30})
	}
}






