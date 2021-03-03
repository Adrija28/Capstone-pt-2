const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine, world;

function setup() {
  createCanvas(400,700);
engine = Engine.create()
world = engine.world;

w_1 = new Wall(10, 25, 380, 30)

w_2 = new Wall(10, 55, 30, 350)

w_3 = new Wall(370, 55, 30, 350)

ball = new Ball(100, 200, 25)

block = new Wall( mouseX, 550, 55, 10)

}

function draw() {
  background(0);  
  Engine.update(engine);

w_1.display();

w_2.display();

w_3.display();

ball.display();

block.display();

}