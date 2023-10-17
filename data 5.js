// Manipulando Stings e Numbers

// Transformar um número quebrado com 2 casas decimais e trocar ponto por virgula

let number = 654564654.564564654

// toFixed() - limita as casas decimais depois da virgula
console.log(number.toFixed(2).replace(".",",")) /* podemos adicionar mais de um argumento */
// replace() - substitui o primeiro valor pelo segundo no caso o ponto pela virgula

console.log(Number(number.toFixed(2).replace(".",","))) /* Ele resulta e NaN por conta do replace, sem o replace seria possível a conversão */
console.log(Number(number.toFixed(2)))