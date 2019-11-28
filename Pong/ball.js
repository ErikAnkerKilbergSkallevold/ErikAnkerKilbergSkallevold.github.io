function Ball(){
  this.pos = createVector(width/2, height/2);
  this.r = 10;
  this. maxSpd = createVector(20, 15);
  this.collision = false;
  this.collObj = null;

do{
  this.acc = p5.Vector.random2D(); //Lager en vektor mellom -1 og 1.
  this.acc.setMag(random(4, 6)); //Endrer magnituden på vectoren.
}while (abs(this.acc.x)<3 || abs(this.acc.y)<3); //Akselarsjonen på ballen, kommer til å være opprettholdt gjennom hele spillet

this.show = function(){
  noStroke();
  fill(255);
  ellipse(this.pos.x, this.pos.y, this.r*2); //Ganger to for diamteren, en value gjør det til en sirkel
  }

  this.update = function(){
    this.pos.add(this.acc);

    if(this.pos.y<this.r || this.pos.y>height-this.r){ //Kollisjon for å bounce
      this.acc.y*=-1; //Reverserer akselareasjonen, hardkoder valuen.
    }
  }

  this.edges = function(){
    let collided = false;
    let obj;
    let d1, d2;

    for(let i = 0; i < player.h; i++){
      d1 = dist(this.pos.x, this.pos.y, ai.pos.x, ai.pos.y+i);
      d2 = dist(this.pos.x, this.pos.y, player.pos.x, player.pos.y+i);

      if(d1<=this.r){
        collided = true;
        obj = ai;
        break;
      }else if (d2<=this.r) {
        collided = true;
        obj = player;
        break;
      }
    }

    if(collided && !this.collision){
      this.collision = true;
      this.collObj = obj;


      this.acc.add(createVector(0.5, obj.acc.y*0.25)) //Øker ballen sin hastighet på x aksen med 0.5 per kolliosjon
      this.acc.x *=-1;
      this.acc.x = constrain(this.acc.x, -this.maxSpd.x, this.maxSpd.x); //
      this.acc.y = constrain(this.acc.y, -this.maxSpd.y, this.maxSpd.y); //

    }else if(this.collObj){
      let d = dist(this.pos.x, this.pos.y, this.collObj.pos.x, this.collObj.pos.y);
      if(d>100){this.collision = false;}
      this.collision = false;
    }
  }
}
