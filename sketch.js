
function preload(){
  //pre-load images

  pathimag=loadImage("path.png");
  boyimag=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  path=createSprite(200,200);
  path.addImage(pathimag);
  path.velocityY=4;
  path.scale=1.2;

  boy=createSprite(180,340,30,30);
  boy.addAnimation("boyrunner",boyimag);
  boy.scale=0.08;

  leftb=createSprite(0,0,100,800);
  leftb.visible=false;

  rightb=createSprite(410,0,100,800);
  rightb.visible=false;
}

function draw() {
  background(0);

  boy.x=World.mouseX;
  boy.collide(leftb);
  boy.collide(rightb);

  if(path.y>400){
    path.y=height/2;
  }
drawSprites();
}
