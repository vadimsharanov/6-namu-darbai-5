
// Javascript "Objektai"
// 1. Papildyti paskaitoje aptartą skaičiuotuvo objektą:
// * Pridėti šaknies bei liekanos skaičiavimo metodus.
// * Metodas "rezultatas" išvedą rezultatų masyvą.
// * Papildyti objektą metodu, kuris išvedą visų metodo "rezultatas" masyvo elementų vidurkį.

"use strict";

document.getElementById("mygtukas").addEventListener("click", function(){
    let skaiciusIsIvesties1 = parseFloat(document.getElementById("ivestis1").value);
    let skaiciusIsIvesties2 = parseFloat(document.getElementById("ivestis2").value);

const skaiciuotuvas =  {

sk1:0,
sk2:0,
pagalbinis:[],

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
    let traukiamSakni1 = Math.sqrt(this.sk1);
    let traukiamSakni2 = Math.sqrt(this.sk2);
    return [traukiamSakni1, traukiamSakni2]
},

liekana: function () {
    let ieskomLiekana = this.sk1 % this.sk2
    return ieskomLiekana
},

rezultas: function () {
    let skMasyvas = [];
    skMasyvas = ["sudetis=" + this.sudetis(), "atimtis = " + this.atimtis(), "daugyba = "  + this.daugyba(), "dalyba = " + this.dalyba(), "liekana = " +  this.liekana(),  "saknis = " +this.saknis()]

    return skMasyvas;
}  ,
vidurkis: function() {
    let suma, skaicius, saknuSuma, viduriukas;
    suma =0; skaicius = 0; saknuSuma = 0;
    saknuSuma = this.saknis()[0] + this.saknis()[1];
    this.pagalbinis = [this.sudetis(), this.atimtis(), this.daugyba(), this.dalyba(), this.liekana(),saknuSuma ];
    for (let i =0; i < this.pagalbinis.length; i++) {
        skaicius=this.pagalbinis[i]
        suma  += skaicius;
    }
    viduriukas = suma / this.pagalbinis.length

return viduriukas
}

}
skaiciuotuvas.paleidimas(skaiciusIsIvesties1, skaiciusIsIvesties2);
skaiciuotuvas.rezultas();
skaiciuotuvas.vidurkis()
document.getElementById("rezultas1").innerText = skaiciuotuvas.rezultas()
document.getElementById("rezultas2").innerText = "vidurkis = " + skaiciuotuvas.vidurkis()
})
