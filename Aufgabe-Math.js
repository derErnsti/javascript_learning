"use strict"

// Aufgabe 1:
// 
// Für eine Tankstelle soll eine automatische Rückgeld-Ausgabe implementiert
// werden. Für dieses Beispiel soll ein Betrag von 15,37€ zurückgegeben werden.
//
// Wandle zuerst den Betrag in die englische Schreibweise um (15.37). Ersetze
// dazu mit Hilfe von .replace() das Komma durch einen Punkt.
// let amountStr = "15,37"
// console.log(amountStr.replace(",", "."))

// let mount = amountStr.replace(",", ".")

// // Lese anschließend den String mit Hilfe der parseFloat()-Funktion ein, und
// // rechne ihn in Cent um. 
// console.log(parseFloat(mount, 10))

// // let mount2 = parseFloat(mount,10)
// console.log(mount2 * 100)

// // Gebe dann aus, mit welchen Münzen dieser Betrag bezahlt werden kann. Der 
// Einfachheit halber wird dieser Betrag ausschließlich mit Münzen bezahlt
// (vereinfacht den Code etwas).
// 
// Kombiniere dazu geschickt den Modulo, Rundungsfunktionen sowie ggf. den 
// Rest. Versuche, zuerst große Münzen auszugeben!
//
// Tipp: Rechne den Betrag am besten zuerst in Cents um. Sonst treten leicht
// Rundungsfehler auf, die das Programm unnötig kompliziert machen!
//
// Natürlich soll das Programm so geschrieben werden, dass jeder
// Beliebige Betrag zurückgegeben werden kann.
// 
// Beispielausgabe: 
//  - 7x 2€ Münze
//  - 1x 1€-Münze
//  - 0x 50 Cent-Münze
//  - 1x 20 Cent-Münze
//  - 1x 10 Cent-Münze
//  - 1x 5 Cent-Münze
//  - 1x 2 Cent-Münze
//  - 0x 2 Cent-Münze
let n =  4567
console.log("-".repeat(20))
console.log("Rückgabebetrag insgesammt: " + n + "cent") 
console.log("-".repeat(20))
console.log(Math.floor(n/200),"x 2€ - Münzen")
let n2 = n % 200
// console.log(n2)
console.log(Math.floor(n2/100),"x 1€ - Münzen")
let n3 = n2 % 100
// console.log(n3)
console.log(Math.floor(n3/50),"x 50ct- Münzen")
let n4 = n3 % 50
// console.log(n4)
console.log(Math.floor(n4/20),"x 20ct - Münzen")
let n5 = n4 % 20
// console.log(n5)
console.log(Math.floor(n5/10),"x 10ct - Münzen")
let n6 = n5 % 10
// console.log(n6)
console.log(Math.floor(n6/5),"x 5ct - Münzen")
let n7 = n6 % 5
// console.log(n7)
console.log(Math.floor(n7/2),"x 2ct - Münzen")
let n8 = n7 % 2
// console.log(n8)
console.log(Math.floor(n8/1),"x 10ct - Münzen")
let n9 = n8 % 1
console.log("-".repeat(20))



/////////////////////////////////////////////////////////////////////////////

// Aufgabe 2
// 
// In Amerika ist es üblich, in Restaurants ca. 15-20% Trinkgeld zu geben. 
// Schreibe ein Programmn welches ca. 15-20% Tringeld auf eine Restaurant-
// Rechnung aufschlägt. 
//
// Versuche, dass der Betrag, der insgesamt bezahlt wird, möglichst nicht 
// zu krumm ist.
//
// Kombiniere dazu geschickt die Rundungsfunktionen, Divisionen oder 
// Multiplikationen.
//
// Zudem soll eine Ausgabe erfolgen, bei dem der Gesamtbetrag mit 2 Nachkommastellen
// ausgegeben wird. Beispiel: "Der Gesamtbetrag beträgt 20.00$"
//
// - Beispiel: Rechungsbetrag 17.00$    -> Der Gesamtbetrag beträgt 20.00$
// - Beispiel: Rechungsbetrag 16.50$    -> Der Gesamtbetrag beträgt 20.00$
// - Beispiel: Rechungsbetrag 10.00$    -> Der Gesamtbetrag beträgt 12.50$
//
// Das Programm muss nicht perfekt sein. Es reicht, wenn es ungefähr 
// funktioniert!
let b1 = 34.50
let x = ((b1/100)*20)
let b2 = x + b1 
let b3 = Math.round((b2 + Number.EPSILON)*100) /100
let b4 = String(b3).padEnd(5, '0')
function komma (float){
    return float * 2 
}
function summe (float, float2){

    return float + float2
}
function dumm (float){
    const dadada = String(float)
    const dududu = dadada.split('.')
    return  dududu
}    

// console.log(b3)
// console.log(b4)
// console.log(komma(b3))
// console.log(komma(b1))
// console.log(summe(5, 7))
// console.log("Der Gesamtbetrag beträgt: " + b3 + "$")
console.log(b3)
console.log(dumm(b3))
// function dumm(d3) must return: 41.40