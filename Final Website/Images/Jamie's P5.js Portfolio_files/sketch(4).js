let angle = 0;
let speedx = 2;
let x;
let blink = 80;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  frameRate(10);
  background(96,130,182);
  x = width/2;
}

function draw() {
  //background("black");
  
  push();
  blendMode(DIFFERENCE);
  noStroke();
  fill(96,130,182,50);
  let lines = 80;
  for (let i = 0; i < lines; i+=2){
    rect(width/lines*i,1, 3,400);
  }
  pop();
    
  push();
  //noStroke();
  stroke("white");
  fill(31,48,94);
  translate(200, 200);
  let numPetals2 = 90;
  for (let i = 0; i < numPetals2; i++){
    arc(300,-120, 200, 900, 100,180+angle, CHORD);
    rotate(360/numPetals2);
    angle+=100;
  }
  pop();
  
    push();
  //noStroke();
  stroke("white");
  fill(31,48,94);
  translate(200, 200);
  let numPetals3 = 90;
  for (let i = 0; i < numPetals3; i++){
    arc(300,-120, 100, 900, 100+angle,180+angle, CHORD);
    rotate(360/numPetals3);
    angle+=0.01;
  }
  pop();

   
  push();
  //noStroke();
  strokeWeight(3);
  stroke(240,248,255);
  fill(118,171,223);
  translate(200, 200);
  let numPetals = 18;
  for (let i = 0; i < numPetals; i++){
    arc(50,-120, 200, 200, 100+angle,180+angle, CHORD);
    rotate(360/numPetals);
    angle+= 0.3;
  }
  pop();
  
  push();
  fill(220,52,59,10);
  noStroke();
  circle(200,200,70);
  pop();
  
    if(frameCount%160<blink == 0){
    blendMode(SCREEN);
  }else{
    blendMode(BLEND);
  }
}