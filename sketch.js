var sea,ship;
var seaImg,shipImg;

function preload(){
  //descomentar el código para agregar la animación del barco 
//el codigo estaba mal y lo tuve que arreglar >:v 

/*

*/
  shipImg = loadAnimation("ship-1.png","ship-2.png");
  
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Mover el fondo
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -2;
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg);
  ship.scale =0.25;
  
}

function draw() {
  background(0);


  //descomentar el código para reiniciar el fondo
  if(sea.x < 0){
    sea.x = sea.width/8;
  }

 
  drawSprites();
}
