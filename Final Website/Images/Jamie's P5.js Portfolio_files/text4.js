class TextFour{
  constructor(x = 200, y = 200){
    this.x = x;
    this.y = y;
    this.size = 3;
  }
  display(){
    
  }
  newPos(x,y){
    this.x = x;
    this.y = y;
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
      fill("black");
      text(words4[index],this.x, this.y-55, boxWidth, boxHeight);
      pop();
  }
   }
}