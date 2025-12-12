class TextTen{
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
  if (mouseIsPressed){
    showtext2 = true;
  }
  if(showtext2){
      push();
      fill(255,180);
      noStroke();
      rect(this.x, this.y-70, 300, boxHeight);
      pop();
      push();
      fill("black");
      text(words10[index],this.x, this.y-55, 300, boxHeight);
      pop();
  }
   }
}