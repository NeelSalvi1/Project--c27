
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);
  rubber= new Rubber(200,500,10)
	stone= new Stone(300,320,70,50)
  plane= new Plane(5,680,2000,40);
  hammer= new Hammer(200,300,100,40);
}


function draw() {
  rectMode(CENTER);
  background("blue");
  hammer.display();
  plane.display();
  stone.display();
  rubber.display();
}



