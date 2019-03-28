const main = document.querySelector("main");

const db = firebase.database();
const pokemon = db.ref("pokemon");

function visPoke(snapshot){
  let Poke = snapshot.val();
  main.innerHTML += `
  <div class="griddiv">
  <div class="border">
  <h1>${Poke.Name}</h1>
  <p><b>Primær type: </b>${Poke.Type1}</p>
  <p><b>Sekundær type: </b>${Poke.Type2}</p>
  <p><b>Max CP: </b>${Poke.MaxCP}</p>
  <p><b>Max HP: </b>${Poke.MaxHP}</p>
  <img src="${Poke.ImageURL}" alt="" />
  `
}

pokemon.on("child_added",visPoke)

function sorterNavn(){
  main.innerHTML = ``
  pokemon
  .orderByChild("Name")
  .on("child_added", visPoke);
}

function sorterType1(){
  main.innerHTML = ``
  pokemon
  .orderByChild("Type1")
  .on("child_added", visPoke);
}

function sorterType2(){
  main.innerHTML = ``
  pokemon
  .orderByChild("Type2")
  .on("child_added", visPoke);
}

function sorterMaxCP(){
  main.innerHTML = ``
  pokemon
  .orderByChild("MaxCP")
  .on("child_added", visPoke);
}

function sorterMaxHP(){
  main.innerHTML = ``
  pokemon
  .orderByChild("MaxHP")
  .on("child_added", visPoke);
}
function revers(){
  pokemon
  .sort()
  .reverse()
  .on("child_added", visPoke);
}
