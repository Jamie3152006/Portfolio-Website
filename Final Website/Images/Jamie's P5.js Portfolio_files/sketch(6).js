let puzzleImage, rows, colums, w, h, numberCorrect, solved;
numberCorrect = 0;
solved = false;
let button = false;
let speech = false;
let pieces = [];
let img = [];
let img2 = [];
let scene = 0;
let txt;
let person1;
let person2;
let text1;
let text2;
let text3;
let text4;
let text5;
let text6;
let text7;
let text8;
let text9;
let text10;
let trigger = false;
let boxWidth = 250;
let boxHeight = 70;
let completed = false;
let check = false;
let showtext = false;
let showtext2 = false;

let words0 = ["Where am I?", "Why do I feel so sad?", "Oh, I see a park in the distance", "Maybe I'll find some answers there"];
let words = ["Hello!", "Are You Ready to Play?", "Press Screen to See Dialogue","Press 's' to Switch Scenes", "Press 'a' to Go Back a Scene","Move Character with Arrow Keys", "Objective: Find the Character's Memories", "Figure out why They are Feeling Down", "Have Fun Playing!"];
let words2 = ["Hi", "You lost your memories?", "Do I know what happened?", "No, but I may know why you are sad", "Remember your friend Amelia?", "Yeah, I think you guys had a falling out", "But that's all I know", "I don't know specifically what happened between you two", "You don't remember her?", "Here, this is a photo of you guys:"];
let words3 = ["Hi!", "How are you?", "Do you want to jump in puddles with me?", "Oh, you're trying to figure out what happened between you and Amelia?", "Hmmm, I don't really know either", "But! You kept a diary", "It should have what you forgot in there", "Where can you find it?","Try the library, you hung out there a lot", "You were also always forgetting your things there", "Okay! Good luck!"];
let words4 = ["Hi there!", "Where have you been?", "Do you want climb trees with me?","What?", "You lost your memories?", "That's awful!", "Hmmmm", "The last thing I remember you doing?", "Oh! You were hanging out with Rosie!", "Yeah, she's right over there", "Across the park sitting on the bench", "Okay!", "See you!", "Come back anytime if you want to climb trees!"];
let words5 = ["","Dear diary", "I don't know why Amelia is ignoring me all of a sudden", "We used to be best friends", "But now she won't even talk to me", "She had a birthday party and didn't even invite me", "I don't know what to do", "She was my only friend that I had ...","Why am I always so alone ..."];
let words6 = ["Hello", "You're looking for your diary that you lost?", "I don't know, try the back or corner", "I remember those were your favorite spots"];
let words7 = ["I wonder why Amelia stopped talking to me", "What did I do for us to not be friends anymore..."];
let words8 = ["Hey!","Didn't I tell you to stay away from my daughter?", "I always knew you were a bad influence on her", "You're so different and weird, I don't want that rubbing off on Amelia", "Go away now, I don't want to see you here again"];
let words9 = ["Why are you crying child?", "Ah, Amelia's mom", "Unfortunately, there are always going to be people like her out there", "They will always be afraid of someone being different from the norm", "But not all hope is lost", "There are more people out there that care for you than you think", "Was Amelia truly your only friend?", "Were there not others just as happy to see you?", "Who wanted to play with you?", "Those people are the ones that you should hold close to you", "Stop dewelling on those set in their ways, and focus on those that do care."];
let words10 = ["","The world isn't always fair","Friendships are hard", "Sometimes it is hard to stay true to yourself", "It is hard to remember that there are so many people out there that do care", "But remember,", "You are loved and appreciated,", "And never change who you are", "Appreciate the differences and people from all walks of life", "The End. Thanks for Playing!"];
let index = 0;


function preload(){
  img[0] = loadImage("Images/Bench.jpg");
  img[1] = loadImage("Images/Books.jpg");
  img[2] = loadImage("Images/Desk.JPG");
  img[3] = loadImage("Images/Garden.JPG");
  img[4] = loadImage("Images/Grandma.JPG");
  img[5] = loadImage("Images/Grass.JPG");
  img[6] = loadImage("Images/Library.JPG");
  img[7] = loadImage("Images/OneBook.JPG");
  img[8] = loadImage("Images/Puddle.JPG");
  img[9] = loadImage("Images/Tree.jpg");
  img2[0] = loadImage("Cover/end.jpg");
  img2[1] = loadImage("Cover/intro.JPG");
  imgp = loadImage("person.png");
  imgp2 = loadImage("crying.png");
  puzzleImage = loadImage("puzzleimg.jpg");
}


function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  textAlign(CENTER);
  text1 = new Text();
  text2 = new TextTwo(155,130);
  text3 = new TextThree();
  text4 = new TextFour();
  text5 = new TextFive();
  text6 = new TextSix();
  text7 = new TextSeven();
  text8 = new TextEight();
  text9 = new TextNine();
  text10 = new TextTen();
  person1 = new PersonOne();
  person2 = new PersonTwo();
  
  puzzleImage.resize(250,250);
  rows = 4;
  columns = 4;
  w = puzzleImage.width / columns;
  h = puzzleImage.height / rows;
   let i = 0;
  for (y = 0; y < rows * h; y += h) {
    for (x = 0; x < columns * w; x += w) {
      pieces[i] = new Piece(puzzleImage, x, y, w, h);
      i++;
    }
  }
  for (let i = 0; i < pieces.length; i++) {
    pieces[i].x = random(5, 120);
    pieces[i].y = random(5, 120);
  }

}

function draw() {
  background(220);
    if (scene === 0) {
    drawScene0();
  } else if (scene === 1) {
    drawScene1();
  } else if (scene === 2) {
    drawScene2();
  } else if (scene === 3) {
    drawScene3();
  } else if (scene === 4) {
    drawScene4();
  } else if (scene === 5) {
    drawScene5();
  } else if (scene === 6) {
    drawScene6();
  } else if (scene === 7) {
    drawScene7();
  } else if (scene === 8) {
    drawScene8();
  }else if (scene === 9) {
    drawScene9();
  }else if (scene === 10) {
    drawScene10();
  }else if (scene === 11) {
    drawScene11();
  }else if (scene === 12) {
    drawScene12();
  }else if (scene === 13) {
    drawScene13();
  }else if (scene === 14) {
    drawScene14();
  }else if (scene === 15) {
    drawScene15();
  }else if (scene === 16) {
    drawScene16();
  }
  print("pieces correct spot:");
  for (let i = 0; i < pieces.length; i++) {
    print(i);
    print(pieces[i].correct);
  }
}

function drawScene0(){
  background(0);
  img2[1].resize(400,400);
  image(img2[1], 0,0);
  push();
  fill(255);
  textSize(17);
  text("Press Anywhere to Start Playing", 200, 365);
  pop();
  if(mouseIsPressed){
   button = true;
  }
  if(button){
   scene = +1;
  }
  // textSize(17);
  // text(words[index], 100,160);
}

function drawScene1(){
 background(0);           //intro
 rect(350,200,50,50);
 fill(255);
 textSize(18);
 text("Instructions", 200, 35);
 person1.display();
 person1.update();
 text1.display();
 text1.update();
}

function drawScene2(){
  background(0);  //beginning
  person1.display();
  person1.update();
  if(mouseIsPressed){
    speech = true;
  }
  if(speech){
    push();
    noStroke();
    fill(255,150);
    rect(200, 195, 210,60)
    fill(0);
    text(words0[index], 200,200, 200,60);
    pop();
  }
}

function drawScene3(){ //grass
  img[5].resize(400,400);
  image(img[5], 0,0);
  person1.display();
  person1.update();
}

function drawScene4(){ //tree
  img[9].resize(400,400);
  image(img[9], 0,0);
  person1.display();
  person1.update();
  text4.newPos(185,115);
  text4.update();
}

function drawScene5(){
  img[5].resize(400,400);     //grass
  image(img[5], 0,0);
  person1.display();
  person1.update();
}

function drawScene6(){
  img[0].resize(400,400);  //bench
  image(img[0], 0,0);
  person1.display();
  person1.update();
  text2.update();
}

function drawScene7(){
  background(0);       //puzzle
  push();
  noFill();
  strokeWeight(7)
  stroke(255);
  rect(200,200, 250,250);
  pop();
  for (let i = 0; i < pieces.length; i++) {
    pieces[i].show();
  }
  push();
  fill(255);
  textStyle(BOLD);
  textSize(20);
  text("Solve the Puzzle", 200,45); 
  pop();
  
  if(completed){
    fill("white");
    textSize(16);
    text("You can Move On to Next Scene!", 200,370);
  }
  
}

function drawScene8(){
  img[8].resize(400,400); //puddle
  image(img[8], 0,0);
  person1.display();
  person1.update();
  text3.newPos(150,120);
  text3.update();
}

function drawScene9(){
  background(10);
  img[6].resize(400,400); //library
  image(img[6], 0,0);
  person1.display();
  person1.update();
}

function drawScene10(){
  img[2].resize(400,400); //front desk
  image(img[2], 0,0);
  person1.display();
  person1.update();
  text6.update();
}

function drawScene11(){
  background(10);
  img[1].resize(400,400); //book
  image(img[1], 0,0);
  if(mouseX>330 && mouseX < 400 && mouseY > 58 && mouseY < 98 ){
      if(mouseIsPressed){
       check = true;
      }
    }
  if(check){
    push();
    stroke("white");
    fill("rgb(95,182,95)")
    circle(330,63,30);
    pop();
  }else{
    if(mouseIsPressed){
      push();
      fill(255,0,0,70);
      rect(200,200,400);
      fill("red");
      rect(mouseX, mouseY, 30);
      pop();
    }
  }
  person1.display();
  person1.update();
}

function drawScene12(){
  background(10);
  img[7].resize(400,400); //closeup of book
  image(img[7], 0,0);
  text5.update();

}

function drawScene13(){
  img[5].resize(400,400); //grass
  image(img[5], 0,0);
  person1.display();
  person1.update();
  text7.update();
}

function drawScene14(){
  background(10);
  img[3].resize(400,400); //mom
  image(img[3], 0,0);
  person1.display();
  person1.update();
  text8.newPos(150,120);
  text8.update();
}

function drawScene15(){
  background(10);
  img[4].resize(400,400); //grandma
  image(img[4], 0,0);
  person2.display();
  person2.update();
  text9.newPos(193, 120);
  text9.update();
}

function drawScene16(){
  background(10);
  img2[0].resize(400,400);
  image(img2[0], 0,0);
  text10.update();
}


function keyPressed(){
  if(key === "s"){
    if(scene == 11){
       if(check){
       scene+= 1;
       index = 0;
       showtext = false;
       }
       index = 0;
     }else if(scene == 7){
       if(completed){
         scene+= 1;
       }
       index = 0;
     }else{
       scene+= 1;
        if (scene == 17){
          scene = 0;
        }
        index = 0;
     }    
  }
  
  if(key === "a"){
    scene-= 1;
    index = 0;
  }
  
  
  if(key === "p"){
    for(let i = 0; i < pieces.length; i++){
      pieces[i].x = pieces[i].tx;
      pieces[i].y = pieces[i].ty;
      pieces[i].correct = true;
    }
    completed = true;
    solved = true;
  }
}


class Piece {
  constructor(myImage, x, y, w, h) {
    this.myImage = myImage;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.sx = x;
    this.sy = y;
    this.drag = false;
    this.tx = x+75; //tx = target x
    this.ty = y+75; //ty = target y
    this.correct = false;
  }
  show() {
    if (this.drag) {
      fill(0, 100);
      noStroke();
      rect(this.x + 5, this.y + 5, this.w, this.h);
    }
    image(
      this.myImage,
      this.x,
      this.y,
      this.w,
      this.h,
      this.sx,
      this.sy,
      this.w,
      this.h
    );
  }
  clicked(x, y) {
    if (
      x > this.x &&
      x < this.x + this.w &&
      y > this.y &&
      y < this.y + this.h
    ) {
      this.drag = true;
      this.x = x - this.w / 2;
      this.y = y - this.h / 2;
      //get pos of current object
      let myIndexPosition = pieces.indexOf(this);
      pieces.splice(myIndexPosition, 1);
      pieces.push(this);
    }
  }
  active(x, y) {
    cursor("grabbing");
    if (this.drag) {
      this.x = x - this.w / 2;
      this.y = y - this.h / 2;
    }
  }
  check() {
    this.drag = false;
    cursor("grab");
    //check if in target location
    if (abs(this.x - this.tx) < 20 && abs(this.y - this.ty) < 20) {
      this.correct = true;
      this.x = this.tx;
      this.y = this.ty;
      print("im here");
    } else {
      this.correct = false;
    }
  }
}

function mousePressed() {
  if(scene === 1){
    index++;
    if(index > words.length-1){
      index = 0;
     }
   }
    if(scene === 2){
      index++;
    if(index > words0.length-1){
      index = 0;
    }
  }
    if(scene === 4){
      index++;
    if(index > words4.length-1){
      index = 0;
    }
  }
    if(scene === 6){
      index++;
    if(index > words2.length-1){
      index = 0;
    }
  }
    if(scene === 8){
      index++;
    if(index > words3.length-1){
      index = 0;
    }
  }
    if(scene === 10){
      index++;
    if(index > words6.length-1){
      index = 0;
    }
  }

   if(scene === 12){
    index++;
    // if(index > words5.length-1){
    //   index = 0;
    //  }
   }
    if(scene === 13){
    index++;
    if(index > words7.length-1){
      index = 0;
     }
   }
    if(scene === 14){
    index++;
    if(index > words8.length-1){
      index = 0;
     }
   }
    if(scene === 15){
    index++;
    if(index > words9.length-1){
      index = 0;
     }
   }
    if(scene === 16){
    index++;
    // if(index > words10.length-1){
    //   index = 0;
    //  }
   }
 
  
  if(scene === 7){
  for (let i = 0; i < pieces.length; i++) {
    pieces[i].clicked(mouseX, mouseY);
   }
  }
}

function mouseDragged() {
  for (let i = 0; i < pieces.length; i++) {
    pieces[i].active(mouseX, mouseY);
  }
}

function mouseReleased() {
  numberCorrect = 0;
  for (let i = 0; i < pieces.length; i++) {
    pieces[i].check();
    if (pieces[i].correct == true) {
      numberCorrect++;
    }
  }
  if (numberCorrect == pieces.length) {
    solved = true;
    completed = true;
  }
}

