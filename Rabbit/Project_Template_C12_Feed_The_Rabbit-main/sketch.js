var garden,rabbit;
var gardenImg,rabbitImg;
var apple
var select_sprites = Math.round(random(1,2))
if (frameCount%80==0) {
  if (select_sprites == 1) {
    createApples()
  }
} else {
  createLeaves()
}
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


  

}

function draw() {
  background(0);
  rabbit.x=mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}

function createApples() {
  apple = createSprite(random(50, 350),40 ,10, 10)
  apple.addImage("apple.png")
  apple.velocityY=3
}

function createLeaves() {
  leaf = createSprite(random(50, 350),40 ,10, 10)
  leaf.addImage("orangeLeaf.png")
  leaf.velocityY=3
}


