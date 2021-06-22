// . Susikurti objektų masyvą:
// * Masyve 100 objekto elementų.
// * Objekto vidiniai kintamieji: id, vardas.
// * Vardas reikšmė = vardas1,vardas2 ir t.t.  
// * Id reikšmė = 1, 2 ir t.t.

// Papildomai:
// Pagal sukurtą obejktų masyvą, sukurti tiek pat div elementų, kuriuose išvedamas id ir vardas. Kas antras div - mėlynas.
"use strict"
let masyvas
masyvas = [];
for (let i=0; i <100;i++) {
let objektas = {

  vardas: "vardas" + (i+1),
  id: i+1,
}
masyvas[i] = objektas;
console.log(masyvas[i]);
 let hueta = document.createElement("div");
 hueta.classList.add("baltas");
 if (i % 2 ==0) {
   hueta.classList.add("melynas");
 }
 hueta.innerText = objektas.vardas + " " + "id" +  objektas.id
 document.querySelector(".rezultas").append(hueta);
}
