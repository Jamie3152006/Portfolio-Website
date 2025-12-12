let legs; 
let head;
let body;
function preload(){
  legs = loadImage('LEGS.png')
  head = loadImage('HEADS.png')
  body = loadImage('BODY.png')
}

function setup() {
  createCanvas(500, 900);
  // rectMode(CENTER);
}

function draw() {
  background(220);
  divider();
  head.resize(500,300);
  image(head, 0, 0);
  
  body.resize(500,300);
  image(body,0,300);
  
  legs.resize(500,300);
  image(legs,0,600);
  
}



function divider(){
  push();
  noStroke();
  fill("black");
  rect(0, height/3, 500, 5);
  rect(0, height/3 * 2, 500, 5);
  pop();
}