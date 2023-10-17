// Manipulando Arrays

// Contar os elementos de um array
console.log(["a", "b", "c"].length)

console.log([
  "a", 
  {type: "array"},
  function() {return "alo"},
].length) // É possível adicionar vários tipos de objetos dentro de um array, e quebra-los desde que tenha a virgula

console.log([
  "a", 
  {type: "array"},
  function() {return "alo"},
][2]()) //se quiser acessar um elemento do array só coloca-lo nos colchetes, como o 2 é um function só adicionar o () para executa-la

console.log([
  "a", 
  {type: "array"},
  function() {return "alo"},
][1].type) // .type vai dizer qual o tipo do objeto