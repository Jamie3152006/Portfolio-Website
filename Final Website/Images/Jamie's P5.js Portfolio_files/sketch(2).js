let color1 = "#1B1B1B";
let color2 = "#CC3333";
let color3 = "#FF91A4";
let color4 = "#FADA5E";
let color5 = "#223949";
let color6 = "#A4DDED"; 
let color7 = "#708090";
let color8 = "#353839";
let color9 = "#FACA16";
let color10 = "#F8F8FF";
let myFont;
let myFont2;
let whentoBlink = 20;
let radius = 70;
let angle = 0;
let speed = 3;

function setup() {
  createCanvas(600, 600);
  frameRate(7);
  angleMode(DEGREES);
  myFont = loadFont("UbuntuSans_Condensed-SemiBold.ttf");
  myFont2 = loadFont("Carattere-Regular.ttf");
}

function draw() {
  
if(frameCount%100 == 0){
    let temp = color1;
    color1 = color2;
    color2 = temp;
  
    let temp2 = color3;
    color3 = color4;
    color4 = temp2;
    
    let temp3 = color5;
      color5 = color6;
      color6 = temp3;
  
    let temp5 = color9;
      color9 = color10;
      color10 = temp5;
  }
 
  let lerpPos = map(frameCount%100,0, 100,0, 1);
  let tColo = lerpColor(color(color1), color(color2), lerpPos);
  let eColo = lerpColor(color(color3), color(color4), lerpPos);
  let wColo = lerpColor(color(color5), color(color6), lerpPos);
  let sColo = lerpColor(color(color9), color(color10), lerpPos);
  
if(frameCount%120 == 0){
    let temp4 = color7;
    color7 = color8;
    color8 = temp4;
  }
  
  let lerpPos2 = map(frameCount%120,0, 100,0, 1);
  let hColo = lerpColor(color(color7), color(color8), lerpPos2);
  
 background("#1E4D2B");
  stroke("#F5F5DC");
  fill(tColo);
  rect(50,40, 600,650);
  
//person and window
  push();
  noStroke();
  fill(hColo);
  rect(width/2+50, height/2-140, 200,350);
  ellipse(width/2+90, height/2+180, 300,170);
  rect(width/2+20, height/2+185, 330,70);
  fill(wColo);
  rect(90,70, 200,200);
  fill("#F5F5DC");
  rect(width/2+190, height/2+100, 230,300);
  fill("#1E4D2B");
  arc(width/2+318, height/2-120, 450,800, 0,180, CHORD);
  fill("#F5F5DC");
  arc(width/2+290, height/2-150, 450,800, 0,180, CHORD);
  fill(hColo);
  arc(width/2+254,height/2-120, 450, 500, 180, 0, CHORD);
  fill(tColo);
  circle(width/2-40, height/2+80, 170);
  fill(hColo);
  rect(width/2+30, height/2-140, 20,350);
  pop();

  //sun or moon  
  push();
  noStroke();
  fill(sColo);
  translate(width/2-110, height/2-130);
  rotate (angle);
  circle(radius, 0, 50);
  angle = angle + speed;
  pop();
  
//window  
  push();
  strokeWeight(2);
  line(90,170, 290,170);
  line(190,70, 190,270);
  pop();
  
//hair
  push();
  noStroke();
  fill("#F5F5DC");
  translate(120,-120);
   triangle(width/2, height/2-50, width/2-11, height/2, width/2+11,height/2);
  pop();
  
//blush  
  push();
  rotate(-23);
  noStroke();
  fill(eColo);
  ellipse(width/2-25, height/2+250, 95,145);
  pop();

//Text
  push();
  fill("white");
  textFont(myFont);
  textSize(110);
  text("N", width/2-168, height/2+20);
  text("M", width/2-240, height/2+120);
  text("OWN", width/2-100, height/2+200)
  textFont(myFont2);
  text("O", width/2-250, height/2+20);
  text("Y", width/2-168, height/2+120);
  noStroke();
  fill("#DA2C43");
  text("T",width/2-270, height/2+280);
  text("i",width/2-90, height/2+280);
  text("m",width/2+50, height/2+280);
  text("e",width/2+200, height/2+280);
  pop();
  
  
  //mouth
  fill("#CC3333");
  arc(width/2+300, height/2+190, 120,60, 190,0, CHORD);
  
//eyes blink
    if(frameCount%whentoBlink == 0){
      //closed eyes
      fill("black");
      arc(width/2+200, height/2-20, 140,30, 10,195, CHORD);
      print(frameCount);
    }else{
    //open eyes
      push();
      rotate(15);
      translate(50,-140);
      fill("black");
      ellipse(width/2+200, height/2-30, 134,60);
      fill("white");
      ellipse(width/2+200, height/2-20, 130,60);
      pop();
      fill("black");
      noStroke();
      circle(width/2+200, height/2-20,70);
      fill("white");
      circle(width/2+210, height/2-25,20);
    }
}