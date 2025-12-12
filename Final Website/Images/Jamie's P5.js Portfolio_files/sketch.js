num=50
function setup() {
  createCanvas(400, 400);
  blendMode(BLEND);
  ellipseMode(CENTER);  
  noStroke();
}

function draw() {
  background(0,0,0);
  
//sky
  let startColor = color("#9EB9D4");
  let endColor = color("White");
for (var y=0; y<400; y+=2) {
  var currColor = lerpColor (startColor, endColor, y/400);
  fill(currColor);
  rect(0,y,400,11);  
}
 
//baseline
  push();
  fill("#F0F8FF");
  translate(0,50);
  circle(200,200, 350);
  pop();
  
//sun 
  fill(248,222,126);
  translate(-7,0);
  circle(200,200, 160);
  fill(248,222,126,120);
  circle(200,200, 200);
  fill(248,222,126,100);
  circle(200,200, 250);
  fill(248,222,126,90);
  circle(200,200, 300);
  fill(248,222,126,80);
  circle(200,200, 350);
  fill(248,222,126,60);
  circle(200,200, 400);
  
//person 
  fill("black");
  rect(186,161, 14,50);
  fill("black");
  circle(193,150,15);
  rect(178,165, 5,30);
  rect(203,165, 5,30);

//bridge
  push();
  fill("#3D2B1F");
  translate(0,290)
  circle(200,200, 600);
  pop();
 for(let i=0; i< num; i++){
   fill("#635147");
  rect(width/num *i,220, 5,400);
  }

//water
  push();
  fill("#5D89BA");
  translate(0,290)
  circle(200,200, 350);
  pop();
  
//trees 
  fill("#25604B");
  triangle(0,80, 0, 500, 100, 500);
  fill("#4A7352");
  triangle(399,80, 300,500, 500,500);
  push();
  fill("#3B5B41");
  triangle(55,400, 106,274, 182,400);
  pop();
  triangle(154,400, 223,236, 278,400);
  fill("#2D3D30");
  triangle(243,400, 296,285, 357,400);
  
}