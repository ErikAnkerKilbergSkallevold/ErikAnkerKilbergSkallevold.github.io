const db = firebase.database();
const bloggere = db.ref("bloggere");
//Pusher et obkjekt til databsen
bloggere.push({
  "Navn":"Sophie Elise",
  "Følgere": 59000,
  "Kallenavn":"Leppejens",
  "Alder":23
});
//Pusher to strings til databasen
bloggere.push({
  "Navn":"Hjertepappa",
  "Følgere": 29000,
  "Kallenavn":"Hjerta",
  "Alder":35
});
bloggere.push({
  "Navn":"Janijor",
  "Følgere": 12000,
  "Kallenavn":"Panakin",
  "Alder":21
});

const billGates = bloggere.child(90440000)

billGates.set({
  "Navn":"Bill Gates",
  "E-post":"bill@microsoft.com"
});

const steveJobs = bloggere.child(90440001)

steveJobs.set({
  "Navn":"Steve Jobs",
  "Epost":"Steve@apple.com"
});

//endre data

steveJobs.update({
  "navn":"Steve Jeff",
  "Epost":"Steve@apple.com"
});
//bloggere.remove();
