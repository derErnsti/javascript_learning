"use strict"
let s = "3.1415"

// String zu einer ganzen Zahl
console.log(parseInt(s, 10))

// String in Kommazahl
console.log(parseFloat(s, 19))

// Achtung beim rechnen mit Kommazahlen

    // Rundungsfehler
let result1= 50.35 % 6 
    //  Ergebnis sollte eigentlich Null sein, aber:
let result2 = 50.35 % 6 - 2.35     
console.log(result2)

// Rundungsfehler vermeiden
let result3 = 5035 % 600 - 235
console.log(result3)

// Zahl zu String
let n = 3.1415
console.log("" + n)
console.log(n.toExponential())
console.log(n.toFixed(2))
console.log(n.toPrecision(2))