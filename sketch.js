var movingRect;
var fixedRect


function setup() {


  createCanvas(800,400);
  
  movingRect = createSprite(50,50,100,30);
  fixedRect = createSprite(200,200,100,30);

  movingRect.debug = true;
  fixedRect.debug = true;

  movingRect.shapeColor = ("green")
  fixedRect.shapeColor = ("green")
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y - fixedRect.y< movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y<movingRect.height/2 + fixedRect.height/2){
    movingRect.shapeColor = ("red");
    fixedRect.shapeColor = ("red");
  }
  else{
movingRect.shapeColor = ("green")
fixedRect.shapeColor = ("green")


  }
  drawSprites();
}

