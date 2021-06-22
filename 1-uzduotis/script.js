"use strict";

document.getElementById("mygtukas").addEventListener("click", function(){
    let skaiciusIsIvesties1 = parseFloat(document.getElementById("ivestis1").value);
    let skaiciusIsIvesties2 = parseFloat(document.getElementById("ivestis2").value);



const skaiciuotuvas =  {

sk1:0,
sk2:0,

paleidimas: function (a, b) {
    this.sk1 = a
    this.sk2 = b
    

},
sudetis: function () {
    let suma = this.sk1 + this.sk2;
    return suma;
},

atimtis: function () {
    let minus = this.sk1-this.sk2;
    return minus
},
daugyba: function() {
    let dauginti = this.sk1 * this.sk2;
    return dauginti;
},

dalyba: function () {
    let dalinti = this.sk1 / this.sk2;
    return dalinti;
},

saknis: function () {
    let traukiamSakni1 = Math.sqrt(this.sk1)
    let traukiamSakni2 = Math.sqrt(this.sk2)
    return traukiamSakni1, traukiamSakni2
},

liekana: function () {
    let ieskomLiekana = this.sk1 % this.sk2
    return ieskomLiekana
},

rezultas: function () {
    let perdavimas;
    this.skMasyvas = perdavimas;
    perdavimas = [this.sudetis(),this.atimtis(),this.daugyba(),this.dalyba (),this.saknis (),this.liekana()];
     return perdavimas
},
vidurkis: function (){
    let masyvas, vidurkis, indekas, skaicius, suma;
    indekas = 0; skaicius = 0; suma = 0;
    masyvas = this.rezultas();
    while (indekas < masyvas.length) {
        skaicius = masyvas[indekas];
        suma += skaicius;
        indekas = indekas + 1 ;
    }  
    vidurkis = (suma / masyvas.length);

     return ["vidurkis = " + vidurkis ];
}

}
skaiciuotuvas.paleidimas(skaiciusIsIvesties1, skaiciusIsIvesties2)

// let atsakymas = skaiciuotuvas.rezulta()
// document.getElementById("rezultas").innerText = atsakymas

let vidurkis = skaiciuotuvas.vidurkis();
let atsakymas = (skaiciuotuvas.rezultas());
document.getElementById("rezultas").innerText = (vidurkis  + "///" + atsakymas);




})

