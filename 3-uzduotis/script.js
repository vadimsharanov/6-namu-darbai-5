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
            if ( this.ilgis1 != this.ilgis2) {
                console.log("poshel na");
            }
            else {
            let plotas = this.ilgis1*this.ilgis2
            let perimetras = this.ilgis1*4;
            let istrizaine = Math.sqrt(2) * this.ilgis1
        
        return [plotas + "px", perimetras + " px ", istrizaine + "px"]
        
    }
     
    },
    styliausKeitimas: function () {
        
        return document.getElementById("kvadratello").style.border ="this.ilgis 1 solid red"

        
    },
        isvestis: function () {
        return console.log(this.plotasPerimetrasIstrizaine())
    },
        
    }

    
kvadratas.paleidimas(skaiciusIsIvesties1, skaiciusIsIvesties2);

let a = kvadratas.plotasPerimetrasIstrizaine();
document.getElementById("rezultas").innerText = a;
let n = 10;
document.getElementById("kvadratello").style.border ="n solid red"





})

