//press "c" key to generate

var maxDiameter;
var theta;
let r = 350;
outeyeRw = 50;
outeyeLw = 50;
outeyeRh = 150;
outeyeLh = 150;
ineyeLw = 40;
ineyeRw = 40;
ineyeLh= 100;
ineyeRh = 100;
mouth = 75;
tongue = 43;
blushLw = 50;
blushRw = 50;
blushLh = 20;
blushRh = 20;

colors = ["#ADD8E6","#CCCCFF","#FFDAE9","#ED7A9B","#C21E56","#C40234"];

colors2 = ["#FBCEB1","#AB274F","#FFF8E7","#F8F8FF"];

faceC = colors[0];
blushC = colors2 [0];

go = false;

function setup() {
  createCanvas(500, 500);
  maxDiameter = 70;
  maxDiameter2 = 200;
  maxDiameter3 = 300;
  theta = 0;
  angleMode(DEGREES);
}

function draw() {
//background
  background("#FF5800");
  push();
  translate (250,250);
  for (let i =0; i<=360; i+=5){
    stroke("#FFBE6F");
    strokeWeight(8);
    let amt = map(i,0, 360,0, 1);
    let x = r*cos(i);
    let y = r*sin(i);
    line (0,0, x,y); 
  }
  pop();
  
  push();
  fill("#FF8F00");
  var diam3 = 400 + sin(theta) * maxDiameter3 ;
    noStroke();
    circle (250,250, diam3);
    theta += 0.25; 
    pop();
  
  push();
  //background
  fill("#FADA5E");
  var diam2 = 300 + sin(theta) * maxDiameter2 ;
    noStroke();
    circle (250,250, diam2);
    theta += 0.25; 
    pop();
  
  face(250,250);
  
// //face
//   var diam = 250 + sin(theta) * maxDiameter ;
//     noStroke();
//     fill(faceC);
//     circle (height/2, width/2, diam);
//     theta += 0.009; 
// //eyes
//     push();
//     fill("black");
//     ellipse(300,250, 50,150);
//     ellipse(210,250, 50,150);
//     fill("white");
//     ellipse(210,260, 40,100);
//     ellipse(300,260, 40,100);
//     pop();
// //mouth
//   push();
//     fill("#FB607F");
//     circle(255,350, 75);
//     fill("#FFB7C5");
//     circle(255,364, 43);
//   pop();
// //blush
//     fill("white");
//     ellipse(187,335, 50,20);
//     ellipse(324,335, 50,20);
  
if(go){
  randFace();
}  
  
}

function keyPressed(){
  
  if(key === 'c'){
    go = true;
  }
}

function keyReleased(){
  if(key === 'c'){
    go = false;
  }
}

function randFace(){
  
  outeyeRw = int(random(40,50));
  outeyeLw = int(random(40,50));
  outeyeRh = int(random(90,150));
  outeyeLh = int(random(90,150));
  ineyeLw = int(random(20,40));
  ineyeRw = int(random(20,40));
  ineyeLh= int(random(50,100));
  ineyeRh = int(random(50,100));
  mouth = int(random(50,110));
  tongue = int(random(20,90));
  blushLw = int(random(40,70));
  blushRw = int(random(40,70));
  blushLh = int(random(20,40));
  blushRh = int(random(20,40));
  let pos = int(random(0,6));
  let pos2 = int(random(0,4));
  faceC = colors[pos];
  blushC = colors2[pos2];
}



function face (x,y){
  noStroke();
  
 //face
  var diam = 250 + sin(theta) * maxDiameter ;
    noStroke();
    fill(faceC);
    circle (height/2, width/2, diam);
    theta += 0.2;  
//eyes
    push();
    fill("black");
    ellipse(x+50,y, outeyeRw,outeyeRh);
    ellipse(x-40,y, outeyeLw,outeyeLh);
    fill("white");
    ellipse(x-40,y+10, ineyeLw,ineyeLh);
    ellipse(x+50,y+10, ineyeRw,ineyeRh);
    pop();
//mouth
  push();
    fill("#FB607F");
    circle(x+5,y+100, mouth);
    fill("#FFB7C5");
    circle(x+5,y+114, tongue);
  pop();
//blush
    fill(blushC);
    ellipse(x-63,y+85, blushLw,blushLh);
    ellipse(x+74,y+85, blushRw,blushRh);
  
}