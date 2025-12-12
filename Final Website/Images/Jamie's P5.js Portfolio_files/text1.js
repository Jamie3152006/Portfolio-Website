

class Text{
  constructor(){
    this.x = 200;
    this.y = 200;
    this.size = 3;
  }
  display(){
  
  }
  update(){
  if (trigger){
      push();
      fill(255,180);
      noStroke();
      rect(200, 130, boxWidth, boxHeight);
      translate(5,5);
      triangle(280,190, 200,160, 270,160);
      pop();
      push();
      fill(0);
      textSize(17);
      text(words[index], 198,145, boxWidth, boxHeight);
      pop();
  }
   }
}
