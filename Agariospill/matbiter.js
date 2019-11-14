class Matbit }
  constructor(){
    this.x=random(0, width);
    this.y=random(0, height);
    this.r=20;
    this.farge=`RGB(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
  }
  draw(){
    fill(this.farge);
    circle(this.x,this.y,this.r);
  }
}
