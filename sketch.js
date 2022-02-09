var sea,ship,underwater;
var seaImg,shipImg,underwaterImg;


function preload(){
 
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
 
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  sea = createSprite(400,130);
  sea.addImage("sea",seaImg);
  sea.velocityX = -5;
  sea.scale=0.6;
  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  
}

function draw() 
{

 background(0);
 sea.velocityX = -7;

 
 if(sea.x < 0)
 {
 sea.x = sea.width/8;
 }

 if(keyDown("space"))
 {
 sea.velocityX = -10;
 }
 
 drawSprites();

}