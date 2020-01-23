const selAktivitet = document.querySelector('#selAktivitet');
const divIntensiteter = document.querySelector('#divIntensiteter');
const inpVarighet = document.querySelector('#inpVarighet');
const btnBeregn = document.querySelector('#btnBeregn');
const divSvar = document.querySelector('#divSvar');
let radioIntensitet; // En global variabel for radioKnappene

const aktiviteter = [
  {navn: 'Fotball',kcalTime: 510},
  {navn: 'Golf',kcalTime: 24},
  {navn: 'Jogging',kcalTime: 666},
]

const intensiteter = [
  {navn: 'Lav', faktor: 0.8},
  {navn: 'Middels', faktor: 1},
  {navn: 'Høy', faktor: 1.2}
]

// Lager select-elementer for aktivitetene
for (const aktivitet of aktiviteter){
  selAktivitet.innerHTML += `
      <option value=${aktivitet.kcalTime}>
        ${aktivitet.navn}
      </option>
    `;
}

// Lager radio-knapper for intensitetene og knytter disse til variabelen radioIntensitet
for (const intensitet of intensiteter){
  divIntensiteter.innerHTML += `
      <div>
        <input class="radioIntens" type="radio" name="radioIntens" value="${intensitet.faktor}">
        <label>${intensitet.navn}</label>
      </div>
    `;
  radioIntensitet = document.querySelectorAll('.radioIntens');
}


btnBeregn.onclick = () => {

  // Finner den valgte intensiteten
  let intensitet;
  for(const button of radioIntensitet){
    if(button.checked){
      intensitet = Number(button.value);
    }
  }

  // Regner ut forbruket
  let forbruk = Number(selAktivitet.value) * intensitet * Number(inpVarighet.value) / 60;

  // Skriver ut svaret
  divSvar.innerHTML = `
      Kaloriforbuket blir ${forbruk.toFixed(2)} kcal.
    `
}

selAktivitet.onclick = () => selAktivitet[0].disabled = true;
