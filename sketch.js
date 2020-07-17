var car, wall
var speed, weight

function setup() {
  createCanvas(1600,400)
  speed = random(55,90)
  weight = random(400,1500)
  car = createSprite(50,200,50,50)
  wall = createSprite(1500,200,60,200)
  car.velocityX = speed
  car.debug = true; 
  wall.debug = true; 
  }

function draw() {
  background("black")  
  
   if (isTouching(car , wall) && (0.5* speed * speed * weight / 22500 < 100)){
    car.shapeColor = "green";
    car.velocityX = 0 
  }
  if (isTouching(car , wall) && (0.5* speed * speed * weight / 22500 > 100 ) &&
     (0.5* speed * speed * weight / 22500 < 180)){
    car.shapeColor = "yellow";
    car.velocityX = 0
    if (isTouching(car , wall) && (0.5* speed * speed * weight / 22500 > 180)){
      car.shapeColor = "red";
      car.velocityX = 0 
    }
  } 
  drawSprites();

}