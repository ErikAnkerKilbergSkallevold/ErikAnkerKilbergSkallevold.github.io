// Henter inn et <div>-element hvor vi vil plassere quizen
var innpakningEl = document.querySelector(".innpakning");

// Lager en array med spørsmålsobjekter
var quiz = [
  { sporsmaal: "Programmering er...",
    alternativer: ["å skrive programmer med en kode som en datamaskin forstår", "å lage TV-programmer", "å skrive programmer med koder som en person forstår", "alt ovenfor"],
    bilde: "",
    fasit: ["riktig", "galt", "galt", "galt"]},
  { sporsmaal: "Algoritme er...",
    alternativer: ["et vilkårlig sett med instrukser", "instruksjoner for å bygge en datamaskin", "instruksjoner for å fullføre en oppgave som en maskin forstår","instruksjoner for å fullføre en oppgave som en person forstår"],
      bilde: "bilder/sp2.png",
      fasit: ["galt", "galt", "galt", "riktig"]},
  { sporsmaal: "Debugge er...",
    alternativer: ["å slette kode som ikke fungerer som den skal", "å kommentere koden","å plukke lus ut av håret ditt", "å finne og rette bugs i vår program/kode"],
        bilde: "bilder/sp3.png",
        fasit: ["galt", "galt", "galt", "riktig"]},
  { sporsmaal: "En dataprogram er...",
        alternativer: ["kode skrevet bare med symboler","en algoritme oversatt til kode", "en TV-program om datamaskiner","ingen av overnevnte"],
        bilde: "",
        fasit: ["galt", "riktig", "galt", "galt"]},
  { sporsmaal: "Når brukeren trykker på knapper, gjør et valg eller skriver inn data kalles det",
          alternativer: ["brukergrensesnitt", "simulering", "interaksjon", "algoritme"],
          bilde: "",
          fasit: ["galt", "galt", "riktig", "galt"]},
  { sporsmaal: "Kode som repeterer et sett med kodelinjer om og om igjen heter...",
            alternativer: ["variabel (variables)","løkke (loops)", "funksjon (functions)", "test (conditionals)"],
            bilde: "",
            fasit:["galt","riktig","galt","galt"]},
  { sporsmaal: "Hvor mange ganger kjøres kommandoen <i>Make honey</i> i denne koden?",
            alternativer: [2,8,4,12],
            bilde: "bilder/sp7.png",
            fasit: ["galt", "riktig", "galt", "galt"]},
  { sporsmaal: "Vil denne kode fungere for å få alt honning?",
              alternativer: ["Ja", "Aldri","Noen ganger"," None of the above"],
              bilde: "bilder/sp8.PNG",
              fasit: ["riktig", "galt", "galt", "galt"]},
  { sporsmaal: "Hvilken geometrisk figur tegnes av denne koden",
              alternativer: ["Firkant", "Likebeint trekant","Likesidet trekant", "Kvadrat"],
              bilde: "bilder/sp9.PNG",
              fasit: ["galt", "galt", "riktig", "galt"]},
  { sporsmaal: "Test (Conditionals) er",
            alternativer: ["kode som bruker if/else", "kode som gjør at datamaskiner ser intelligent ut","kode som kjører bare under bestemte vilkår", "alt ovenfor"],
            bilde: "",
            fasit: ["galt", "galt", "galt", "riktig"]},
  { sporsmaal: "Kode som du enkelt kan bruke om og om igjen i din program er...",
            alternativer: ["en variabel", "en funksjon","en løkke", "en test"],
            bilde: "",
            fasit: ["galt", "riktig", "galt", "galt"]},

  { sporsmaal: "Hva kaller man ekstra informasjonen som du kan plassere inn i en funksjon for å tilpasse dens oppførsel?",
            alternativer: ["variabel","parameter","løkke","algoritme"],
            bilde: "",
            fasit: ["galt", "riktig", "galt", "galt"]},
  { sporsmaal: "En variabel er en vilkårlig symbol/ord vi bruker i koden våres som representerer f.eks et tall. Det brukes også i matematikk. <br> a = 5 <br> b = a + 8 <br>a og b variabler. Hvilken verdi har b?",
            alternativer: [8,5,13,"a"],
            bilde: "",
            fasit: ["galt", "galt", "riktig", "galt"]},

  { sporsmaal: "<i>count</i> og <i>length</i> er variabler. Kommandoen <i>move forward</i> flytter fram blyanten et bestemt antall piksler. Hvor mange?",
            alternativer: [5,200,100,500],
            bilde: "bilder/sp14.PNG",
            fasit: ["galt", "galt", "galt", "riktig"]},

  { sporsmaal: "Med programmering kan vi ...",
            alternativer: ["lage mobilapps","lage spiller", "lage websider", "alt ovenfor"],
            bilde: "",
            fasit: ["galt", "galt", "galt", "riktig"]},

];
 let n=1;
// Skriver spørsmålene til nettsiden
for (var i = 0; i < quiz.length; i++){

  // Lager et <p>-element til hvert spørsmål
  var sporsmaalEl = document.createElement("p");

  // Skriver ut spørsmålet
  sporsmaalEl.innerHTML += "<h3>" +n+". "+ quiz[i].sporsmaal + "</h3>";
//n++;
  sporsmaalEl.innerHTML +=`<img src=${quiz[i].bilde}><br>`;
  // Lager elementer for hvert av alternativene
  for (var j = 0; j < quiz[i].alternativer.length; j++) {
    var nyCheckbox = document.createElement("input");
    // Angir typen checkbox
    nyCheckbox.type = "radio";
    nyCheckbox.name = "spm"+n;console.log(nyCheckbox.name)
    // Setter boksens value til fasitsvaret
    nyCheckbox.value = quiz[i].fasit[j];
    // Legger til boksen
    sporsmaalEl.appendChild(nyCheckbox);
    // Legger til svaralternativ
    sporsmaalEl.innerHTML += quiz[i].alternativer[j] + "<br>";
  }
sporsmaalEl.innerHTML +="<hr>"
  // Legger til <p>-elementet i innpakningen
  innpakningEl.appendChild(sporsmaalEl);n++;
}
// Legger til en knapp til slutt
var knapp = document.createElement("button");
knapp.innerHTML = "Sjekk svar";
knapp.addEventListener("click", finnPoeng);
innpakningEl.appendChild(knapp);

function finnPoeng(){
  var alleCheckboxEl = document.querySelectorAll("input[type='radio']");

  var antallPoeng = 0;

  for (var i = 0; i < alleCheckboxEl.length; i++) {
    // Hvis en checkbox er haket av
    if (alleCheckboxEl[i].checked) {
      // Undersøk om alternativet er riktig
      if (alleCheckboxEl[i].value === "riktig") {
        // Hvis riktig, gi ett poeng
        antallPoeng++;
      } /*else {
        //  Hvis feil, trekk fra ett poeng
        antallPoeng--;
      }*/
    }
}
if (antallPoeng ===quiz.length){beskjed=" Gratulerer! Alt var riktig! Du fikk " + antallPoeng + " poeng av " + quiz.length + " mulige!"}
else {
  beskjed="Du fikk " + antallPoeng + " poeng av " + quiz.length  + " mulige!"
}

  alert(beskjed)
}
