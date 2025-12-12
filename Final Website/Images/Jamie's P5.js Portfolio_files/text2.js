class TextTwo{
  constructor(x = 200, y = 200){
    this.x = x;
    this.y = y;
    this.size = 3;
  }
  display(){
  
  }
  update(){
  if (trigger){
      push();
      fill(255,180);
      noStroke();
      rect(this.x, this.y-70, boxWidth, boxHeight);
      translate(5,5);
      triangle(this.x+80,this.y-10, this.x,this.y-40, this.x+70,this.y-40);
      pop();
      push();
      fill(0);
      textSize(17);
      text(words2[index], this.x-3,this.y-55, boxWidth, boxHeight);
      pop();
  }
   }
}