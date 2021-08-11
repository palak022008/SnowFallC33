const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var snow = [], maxSnow = 30, snowFall,bg,snowF1,snowF2,snowFlake,snowFcreatedframe = 0;
var engine,world;
function preload(){
bg = loadImage("snow1.jpg");
snowF1 = loadImage("snow4.webp");
snowF2 = loadImage("snow5.webp");
}
function setup() {
  createCanvas(800,400);
engine = Engine.create();
world = engine.world;
  
if(frameCount % 150 === 0 ){
  for(var i = 0; i<maxSnow; i++){
    snow.push(new Snow(random(0,800),random(0,400),random(5,10)))
  }
}
Engine.run(engine);
}

function draw() {
  background(bg);  
for(var i = 0; i<maxSnow; i++){
  snow[i].display();
  snow[i].update();
}

  drawSprites();
}