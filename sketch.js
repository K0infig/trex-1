var trex;
var trex_running;
var edges;
var ground;
var groundImage;


function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200);
  trex = createSprite(50,150, 30,40);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.7;
  
  edges = createEdgeSprites();

  ground = createSprite(300,180,600,20);
  ground.addImage("ground", groundImage);
  ground.velocityX = -3;
 
}

function draw(){
  background("white");

  console.log(ground.x);

  if(ground.x < 0){
    ground.x =width/2;
  }

  if(keyDown("space")){
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY+ 0.5;

  trex.collide(ground);
  
  drawSprites();
}
