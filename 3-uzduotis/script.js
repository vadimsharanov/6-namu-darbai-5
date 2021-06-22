// 3. Susikurti objektą "Kvadratas".
// Objektas turi priimti du kintamuosius: a ir b kraštines.
// Sukurti du metodus, kurie skaičiuoja kvadrato plotą, perimetrą,
//  įstrižainės ilgį.
// Informaciją išvesti į <p> žymę.

// Papildoma: a ir b kintamieji apibrežia kvadratą pikseliais.
//  Pagal įvestas reikšmes į input,
//   HTML nubraižomas kvadrato objektas.   
"use strict";
document.getElementById("mygtukas").addEventListener("click", function () {
let skaiciusIsIvesties1 = parseFloat(document.getElementById("ivestis1").value)
let skaiciusIsIvesties2 = parseFloat(document.getElementById("ivestis2").value)

let kvadratas = {
        ilgis1:0,
        ilgis2:0,
        paleidimas: function (a, b) {
            this.ilgis1 = a
            this.ilgis2 = b
        },

        plotasPerimetrasIstrizaine: function() {
            let plotas = this.ilgis1*this.ilgis2
            let perimetras = this.ilgis1*2 + this.ilgis2*2;
            let istrizaine = Math.sqrt(this.ilgis1**2 + this.ilgis2**2);
        
        return [plotas,perimetras,istrizaine]
    },
    styliausKeitimas: function() {
        document.querySelector(".kvadratas").style.width = this.ilgis1 +  "1px"
        document.querySelector(".kvadratas").style.height=  this.ilgis2 + "1px"
    },

        rezultas: function () {
            document.getElementById("rezultas1").innerText = "plotas = " + this.plotasPerimetrasIstrizaine()[0]
            document.getElementById("rezultas2").innerText = "perimetras = " + this.plotasPerimetrasIstrizaine()[1]
            document.getElementById("rezultas3").innerText = "istrizaine = " + this.plotasPerimetrasIstrizaine()[2]
        }
}

kvadratas.paleidimas(skaiciusIsIvesties1, skaiciusIsIvesties2);
kvadratas.rezultas()
kvadratas.styliausKeitimas()

})