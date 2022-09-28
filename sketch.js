var bird;
var bird_image
var cityBg
var building, building_img

function preload(){
cityBg_img = loadImage("city.webp")

bird_image = loadImage("bird-flap-animation.gif")
building_img = loadImage("building.webp")
}

function setup() {
  createCanvas(800,400);
  
  cityBg = createSprite(400, 200, 800, 400)
  cityBg.addImage(cityBg_img)
  cityBg.scale = 0.313;
   
  bird = createSprite(400, 200, 50, 50);
  bird.scale = 0.2 ;
  bird.addImage(bird_image)

  building = createSprite(500, 300, 50,50)
  building.addImage(building_img)
  building.scale = 1  

}

function draw() {
  background("black");
  
  if(keyDown("space") || keyIsDown(UP_ARROW)) {
    bird.velocityY = -6 ;
    
  }
  bird.velocityY = bird.velocityY + 2;
  drawSprites();
}
