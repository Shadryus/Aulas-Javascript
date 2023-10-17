// Manipulando Stings e Numbers

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = "Eu quero viver o amor"
let myArray = phrase.split(" ") /* split() - tira a palavra e divide os valores entre ela*/

let phraseWithUnderscore = myArray.join("_") /* em array junta auto o Array e separa pelo valor passado no () */

console.log(phraseWithUnderscore.toLowerCase())