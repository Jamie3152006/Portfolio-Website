class PersonTwo{
  constructor(){
    this.x = 200;
    this.y = 200;
    this.speed = 5;
    this.d = dist(this.x, this.y, 350,200);

  }
  display(){
   this.d = dist(this.x-317, this.y-148, 350,200);
   // print(this.d);
   if(this.d<440){
     trigger = true;
   } else {
     trigger = false;
   }
    image(imgp2, this.x-317, this.y-148, 410,410);   //last 2 variables are the dimensions of the image
  }
  update(){
    if(keyIsDown(LEFT_ARROW)) this.x -= this.speed;
    if(keyIsDown(RIGHT_ARROW)) this.x += this.speed;  
    if(keyIsDown(UP_ARROW)) this.y -= this.speed;
    if(keyIsDown(DOWN_ARROW)) this.y += this.speed;
  }
}