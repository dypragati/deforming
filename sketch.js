var car, wall;
var weight,  deformation;

function setup() {
  createCanvas(1600,400);
  car = createSprite(400, 200, 50, 50);
  wall = createSprite(1600, 160, 60, 1600);
  weight = 0;
  
  deformation = 0;
  car.velocityX = random(30, 95);
  weight = random(400, 1500);
  wall.shapeColor = "black";
  
}car.velocityY = 0;

function draw() {
  background(255,255,255);  
  
  car.collide (wall);
  if(car.collide(wall)){
    deformation = 0.5*weight*car.velocityX*car.velocityY/22500
  }
  if(deformation =>100 ){
    car.shapeColor = "green";
  }
  if(deformation <=100){
    car.shapeColor = "yellow";
  }
  if(deformation <=180 ){
    car.shapeColor = "red";
  }
  drawSprites();


}