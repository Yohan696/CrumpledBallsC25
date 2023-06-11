const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ball2, groundObj,leftSide,rightSide;
var world;
var radius = 70;

function preload(){
//find the bug in the below code
	dustbinImg = loadImage("dustbin.png");
	paperImg = loadImage("paper.png");

}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		density:0.4
	}
	var ball2_options={
		isStatic:false,
		restitution:0.4,
		density:0.3
	}
	ball = Bodies.circle(260,100,radius/2.6,ball_options);
	ball2 = Bodies.circle(160,100,radius/2.8,ball2_options);
	World.add(world, ball);
	World.add(world, ball2);

	ground=new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,10,120);
	rightSide = new Ground(1270,600,10,120);
	bottomSide = new Ground(1185,650,150,20);

	Engine.run(engine);

  
}


function draw() {
	background(200);
	rectMode(CENTER);


	ground.display();
	leftSide.display();  
	rightSide.display();
	bottomSide.display();

	
	imageMode(CENTER);
		//use image() command to add paper image to the ball
image(paperImg,ball.position.x,ball.position.y,radius,radius);
image(paperImg, ball2.position.x, ball2.position.y, radius, radius);

	// use image() command to add dustbin image in the canvas.
	image(dustbinImg, 1185, 570, 200,200);
	Engine.update(engine);	

}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball,ball.position,{x:45,y:-65});
		Matter.Body.applyForce(ball2,ball2.position,{x:30,y:-55});
    
  	}
}

 