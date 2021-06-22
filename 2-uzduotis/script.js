// . Susikurti objektų masyvą:
// * Masyve 100 objekto elementų.
// * Objekto vidiniai kintamieji: id, vardas.
// * Vardas reikšmė = vardas1,vardas2 ir t.t.  
// * Id reikšmė = 1, 2 ir t.t.

// Papildomai:
// Pagal sukurtą obejktų masyvą, sukurti tiek pat div elementų, kuriuose išvedamas id ir vardas. Kas antras div - mėlynas.
"use strict"
var value1, value2

var result = []; 
let vardas = "vardas"
let id = "id"

for( var i=0; i<100; i++ ) {
  result.push( {'vardas' :vardas+ i, 'id' : i } ); // insert some more values in a loop
}
console.log(result);
for (let i=1; i <=100; i++) {
    let divElementas = document.createElement("div");
    divElementas.classList.add("baltas");
    divElementas.innerText = (vardas + i) + "   "  +(id + i)
    if ( i % 2 ==0){
        divElementas.classList.add("melynas")
    }
    document.querySelector(".rezultas").append(divElementas);
}
