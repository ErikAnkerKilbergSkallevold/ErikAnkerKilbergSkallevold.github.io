


var sum = 0


const tomarray = []


var tilfeldig = Math.floor(Math.random()*100)+50
tomarray.unshift(tilfeldig);

var tilfeldig2 = Math.floor(Math.random()*100)+50
tomarray.unshift(tilfeldig2);

var tilfeldig3 = Math.floor(Math.random()*100)+50
tomarray.unshift(tilfeldig3);

var tilfeldig4 = Math.floor(Math.random()*100)+50
tomarray.unshift(tilfeldig4);

var tilfeldig5 = Math.floor(Math.random()*100)+50
tomarray.unshift(tilfeldig5);

var tilfeldig6 = Math.floor(Math.random()*100)+50
tomarray.unshift(tilfeldig6);

var tilfeldig7 = Math.floor(Math.random()*100)+50
tomarray.unshift(tilfeldig7);


console.log(tomarray)

tomarray.sort(function(a,b){return b-a});

document.write(tomarray[0]);
document.write(tomarray);

var størst = tomarray[0];

console.log(størst);










/*<script type="text/javascript">
  var sum = 0
  var tall = prompt("Skriv inn et heltall")
  console.log(sum)

  for (var i = 1; i<=tall; i++) {
    sum = sum+i;
  }
  document.write(`Summen av alle tallene mellom 0 og ${tall} = ${sum}`)
</script>*/
