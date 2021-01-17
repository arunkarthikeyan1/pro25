
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,dustbinObj,groundObject	,ground,dustbinimg;

function preload()
{

}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
    paper = new Paper(200,670,70, 70,70);
    groundObject = new Ground(600,height,1200,20)
    dustbinObj=new Dustbin(900,690,220,200,20,205,200);
 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  groundObject.display();
  paper.display();
  paper.scale=0.1;
  dustbinObj.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:165,y:-165});
   }
   }
   

