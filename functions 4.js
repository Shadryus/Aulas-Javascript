//function scope
let subject


//O subject nesse scope por conta de ter o parâmetro subject vai ter o valor study
// Se não tivesse o parâmetro ele iria buscar fora e alterar o valor para study em todos os subjects
function createThink(){
  subject = 'study'
  return subject
}

console.log(subject)
console.log(createThink(subject))
console.log(subject)