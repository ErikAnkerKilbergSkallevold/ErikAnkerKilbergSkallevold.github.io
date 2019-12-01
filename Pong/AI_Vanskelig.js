

function AI(){
  this.w = player.w;
  this.h = player.h;
  this.pos = createVector(width-this.w*3, height/2-this.h/2); //Tegner den fra det andre hjørnet må gange med 3 istedenfor 2
  this.acc = createVector(0, 0)
  this.spd = 2;
  this.maxSpd = 15;


  this.show = function(){
    noStroke(); //Jeg vil ikke ha noe kant på paddlen min
    fill(247, 215, 7); //Jeg vil at den skal ha random farger
    rect(this.pos.x, this.pos.y, this.w, this.h); //X, y og størrelsen til paddlen
  }

  this.update = function(){ //Jeg må en update funksjon får å spilleren til å oppdatere seg på brettet.
  /*  if (ball.pos.y<this.pos.y-this.h/2) {
      this.acc.y-=this.spd;
    }else {
      this.acc.y+=this.spd;
    }


    this.acc.y = constrain(this.acc.y, -this.maxSpd, this.maxSpd);

    this.pos.add(this.acc);
    this.pos.y = constrain(this.pos.y, 0, height-this.h); */

    this.pos.y = ball.pos.y-80; //Paddle følger y-aksen på ballen, for å gjøre det umulig å vinne

  }
}
