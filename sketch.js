var sea,seaImg;
var shipImg;
function preload(){
seaImg = loadImage("sea.png");
shipImg_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  
  sea= createSprite(200,100,40,30);
  sea.addImage("seaImg",seaImg);

  shipImg = createSprite(200,200,40,50);
  shipImg.addAnimation("shipImg_moving",shipImg_moving);
  shipImg.scale=0.3
}

function draw() {
  background("blue");

  sea.velocityX=-3;
//make sea infinite
  if(sea.x<0){
    sea.x=sea.width/2;
    } 
 drawSprites();
}