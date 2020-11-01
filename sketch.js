var wall1
var car1
var speed,weight
function setup() {
  
  createCanvas(800,800);
  speed=random(55,90);
  weight=random(400,1500)
  car1 =createSprite(100,300,60,60);

  car1.velocityX=speed;
 

  wall1 =createSprite(600,300,60,height/2);


}

function draw() {
  background("black") 
  drawSprites();
  deformation()
  
}
function  deformation() {
if(wall1.x-car1.x<(car1.width+wall1.width)/2){
car1.velocityX=0;
var Deformation=0.5*weight*speed*speed/22509;

if(Deformation>180)
{
  car1.shapeColor=color(225,0,0);
}
if(Deformation<180 && Deformation>100){
  car1.shapeColor=color(230,230,0);
}
if(Deformation<100)
{
  car1.shapeColor=color(0,255,0);
}
}
}
