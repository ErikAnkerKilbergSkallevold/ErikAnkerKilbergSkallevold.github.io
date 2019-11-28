function AI(){
  this.w = player.w;
  this.h = player.h;
  this.pos = createVector(width-this.w*3, height/2-this.h/2); //Tegner den fra det andre hjørnet må gange med 3 istedenfor 2
  this.acc = createVector(0, 0)
  this.spd = 10;
  this.maxSpd = 10;


  this.show = function(){
    noStroke(); //Jeg vil ikke ha noe kant på paddlen min
    fill(255); //Jeg vil at den skal ha random farger
    rect(this.pos.x, this.pos.y, this.w, this.h); //X, y og størrelsen til paddlen
  }

  this.update = function(){ //Jeg må en update funksjon får å spilleren til å oppdatere seg på brettet.
    /*let d1 = dist(ball.pos.x, ball.pos.y, this.pos.x, this.pos.y);
    let d2 = dist(ball.pos.x, ball.pos.y, this.pos.x, this.pos.y + this.h);
    let d = (d1+d2)/2;*/

    let d = dist(ball.pos.x, ball.pos.y, this.pos.x, floor((this.pos.y + this.h) / 2));

    this.pos.add(this.acc); //Legger til acceleration
    this.pos.y = constrain(this.pos.y, 0, height-this.h); //Constrainer y

    if(d<450){ //DENNE AI KODEN ER 110% WHACK, DEN ER VELDIG DÅRLIG!!!
      if(ball.pos.y<this.pos.y-this.h/2){
        this.acc.y-=this.spd;
      }else {
        this.acc.y+=this.spd;
      }

      this.acc.y = constrain(this.acc.y, -this.maxSpd, this.maxSpd);

    }else {
      this.acc.y+=random(-this.spd*0.9, this.spd); //AIen har bare 90% av speeden
    }
  }
}
