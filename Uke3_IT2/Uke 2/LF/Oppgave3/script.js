const bryllup = document.querySelector("#bryllup");
const konfirmasjon = document.querySelector("#konfirmasjon");
const barnedaap = document.querySelector("#barnedaap");
const dag = document.querySelector("#dag");
const dato = document.querySelector("#dato");
const klokke = document.querySelector("#klokke");
const sted = document.querySelector("#sted");
const tekst = document.querySelector("#tekst");
const btn = document.querySelector("#btn");
const overskrift = document.querySelector("#overskrift");
const invitasjon = document.querySelector("#invitasjon");
const bilde = document.querySelector("#bilde");
const reg=document.querySelector("#reg");

reg.onsubmit=function(evt){
  evt.preventDefault();
  var navn="";
  if (bryllup.checked){
    overskrift.innerHTML="Invitasjon til bryllupsfest";
    bilde.src="bryllup.jpg";
  } else  if (konfirmasjon.checked){
      overskrift.innerHTML="Invitasjon til konfirmasjon";
      bilde.src="konfirmasjon.jpg";
    }else  if (barnedaap.checked){
        overskrift.innerHTML="Invitasjon til barnedåp";
        bilde.src="daap.jpg";
      }

  invitasjon.innerHTML = `
    <p>${tekst.value}</p>
    <li style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; width: 500px;">
      <ul>${dag.value}</ul>
      <ul>${dato.value}</ul>
      <ul>Klokken: ${klokke.value}</ul>
      <ul>Sted: ${sted.value}</ul>
    </li>`
}
