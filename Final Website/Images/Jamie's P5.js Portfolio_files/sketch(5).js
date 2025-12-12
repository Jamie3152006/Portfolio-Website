  let myData = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]; //my dataset of how many times I put my earbuds in 

// equationNum = myArray[0];
// go = false;
let particles = [];
const num = 9000;
// let noiseScale = 0.01/equationNum;
let affector = 0.01;
let trigger = true;
let noiseScale = affector/3;
let song;
let analyzer;
let sentence = "INMYOWNHEAD";
let sentenceArray = [];
let r = 100;
let theta = 0;
let img;
let myFont;

function preload(){
  song = loadSound("ethereal-ambient-music-55115.mp3");
  img = loadImage("Untitled (3).png");
}
  
function setup() {
  createCanvas(400, 400);
  myFont = loadFont("Goldman-Bold.ttf");
  sentenceArray = sentence.split("");
  song.loop();
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
  
   for(let i = 0; i < num; i++){
    particles.push(createVector(random(width), random(height)));
  }
}

function draw() {
  background(30,41,82,5);
  if (frameCount % 150 == 0){
    //print("hit");
    if(trigger){
      affector += 0.01;
      if (affector > 0.22){
        trigger = false;
      }
    }
    if(!trigger){
      affector += -0.01;
      if (affector < 0.0){
        trigger = true;
      }
    }
  }
  noiseScale = affector/21;
  
  for(let i =22; i < num; i++){
    let p = particles[i];
    point(p.x, p.y);
    let n = noise(p.x * noiseScale, p.y * noiseScale, frameCount * noiseScale * noiseScale);
    let a = 450 * n;
    p.x += cos(a);
    p.y += sin(a);
    if(!onScreen(p)){
      p.x = random(width);
      p.y = random(height);
    }
  }
    print(affector);

  //print(affector);
 // print(frameCount);
  // let col = color(random(255), random(255), random(255));
  strokeWeight(2);
  stroke(255,79);
  
  push();
  fill(255,30);
  textFont(myFont);
  textSize(170);
  text("E", -20, 100);
  text("S", -20, 220);
  text("C", -20, 340);
  textSize(140);
  text("A", 300, 220);
  text("P", 300, 320);
  text("E", 300, 410);
  pop();
  
  let rms = analyzer.getLevel();
  fill(0,40);
  circle(width/2, height/2, 260+rms*300);
  fill("white");
  circle(width/2, height/2, 90);
  img.resize(200,200);
  image(img, 96,100);

  push();
  noStroke();
  fill(237,27,36,70);
  rect(200,140, 60,130);
  rect(180,160, 50, 40);
  rect(130,220, 50, 50)
  translate(204,200);
  textSize(32);
  fill(255,8,0);
  let x = r * cos(theta);
  let y = r * sin(theta);
  for (let i = 0; i < sentenceArray.length; i++){
    rotate(QUARTER_PI/1.35);
    text(sentenceArray[i], x, y);
  }
  pop();
}

// function randomNum(){
//   let pos = int(random(0,21));
//   equationNum = myArray[pos];
// }

function mouseReleased (){
  noiseSeed(millis());
  // when pressed, perlin noise change directions
}

function onScreen(v){
  return v.x >= 0+1 && v.x <= width+1 && v.y >= 0+2 && v.y <= height+2
}
