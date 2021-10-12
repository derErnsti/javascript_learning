"use strict"
let techno = " ---TECHNO--- "
// Zeichlänge
console.log(techno.length)
// Zeichenabfrage
console.log(techno.charAt(4))
console.log(techno[3])
// Zeichnesuche
console.log(techno.indexOf("T"))
console.log(techno.indexOf("NO"))
//Kleiner oder Größer
console.log(techno.toLowerCase())
console.log(techno.toUpperCase())
// Ersetzen
console.log(techno.replace("E", "e" ))
// Zeichen rechts oder links ersetzen
console.log(techno.trim().length)

//NEUE ZEILE (ZEILENUMBRAUCH)
console.log("Party!\nHARD!")

// String wiederholen
console.log("!!!!".repeat(88))

// Abschneiden
console.log("Techno 4Ever".slice(6))

// Rausschneiden
console.log("Party Hard".substr(3, 6))
