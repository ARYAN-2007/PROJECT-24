const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball;
var ground;
var dustbinPeice1,dustbinPeice2,dustbinPeice3;
var backWall;

function preload () {
	
}

function setup () {
	
	createCanvas(1800, 800);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	ground = new Ground(900,700,1800,10);
	
	paperball = new Ball(200,0,50);

	dustbinPeice1 = new Dustbin(1575,615,10,160);
	dustbinPeice2 = new Dustbin(1075,615,10,160);
	dustbinPeice3 = new Dustbin(1325,690,500,10);

	backWall = new Ground(1595,400,10,800);
}


function draw () {
	
background("lightgrey");
Engine.update(engine);


paperball.display();
ground.display();
dustbinPeice1.display();
dustbinPeice2.display();
dustbinPeice3.display();
backWall.display();

}

function keyPressed () {

	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:210,y:210});
	}

}


















