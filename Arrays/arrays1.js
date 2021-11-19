"use strict"

let garage = [

    "rilk",
    "frank",
    "rosti",
    "zett",
    "matze",
    "marha"
]

console.log(garage)
// console.log(typeof garage)
// Länge des Arrays
console.log(garage.length)
// x-tes Element
console.log(garage[3])
// Element hinzufügen
garage.push("gunar")
console.log(garage)
// letztes Element entfernen
garage.pop()
console.log(garage)
// Element überschreiben
garage [0] = "rilkirilk"
console.log(garage)
// prüfen ob Element vorhanden ist
console.log(garage.indexOf("rilkirilk"))
// array sortieren (alphabetisch)
garage.sort()
console.log(garage)
// umgedreht sortieren
garage.reverse ()
console.log(garage)
// sparse array
garage[30] = "ernsti" 
console.log(garage)
// Element entfernen (start, Anzahl der zu entfernendn Elemente)
garage.splice(0,2)
console.log(garage)
// Elemente Hinzufügen
garage.splice(1, 0, "Hure")
console.log(garage)