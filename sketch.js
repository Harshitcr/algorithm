var fixedrect,movingrect;

function setup() {
  createCanvas(1200,800);

  fixedrect=createSprite(600, 400, 50, 80);
  fixedrect.shapeColor="green";
  fixedrect.debug=true;

  movingrect=createSprite(400,200,80,50);
  movingrect.shapeColor="green";
  movingrect.debug=true;
}

function draw() {
  background("black");

  movingrect.y=World.mouseY;
  movingrect.x=World.mouseX;

if(movingrect.x - fixedrect.x<fixedrect.width/2 + movingrect.width/2
  && fixedrect.x - movingrect.x<fixedrect.width/2 + movingrect.width/2
  && movingrect.y - fixedrect.y<fixedrect.width/2 + movingrect.width/2
  && fixedrect.y - movingrect.y<fixedrect.width/2 + movingrect.width/2){
 fixedrect.shapeColor="red";
 movingrect.shapeColor="red";
}else {
 fixedrect.shapeColor="green";
 movingrect.shapeColor="green";}

  drawSprites();
}