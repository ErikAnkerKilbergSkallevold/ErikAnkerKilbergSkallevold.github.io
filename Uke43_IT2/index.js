//const handleliste = document.querySelector("#handleliste");


//const varer = ["Banan", "Cola", "Gummilepper", "Gulost"];


//const priser = [16, 32, 20, 49];
//Traverser et array
//for(const vare of varer){
//  handleliste.innerHTML +=  `
//      <li>
//        ${vare}
//      </li>
//  `;
//}

const handleliste = document.querySelector("#handleliste");
const txtSum = document.querySelector("#txtSum");

const brood = {
  varenavn: "Bakerens Bruh",
  pris: 28
};

const brunost = {
    varenavn: "G35",
    pris: 49
}

const seigmenn = {
    varenavn: "Laban Seigmenn",
    pris: 26
}

const varer = [brood, brunost, seigmenn];

let sum = 0;

for(const vare of varer) {
    sum += vare.pris;
    handleliste.innerHTML += `
        <li>
            ${vare.varenavn} a kr. ${vare.pris.toFixed(2)}
        </li>
    `;
}

txtSum.innerHTML = `Sum: ${sum} kroner`;
