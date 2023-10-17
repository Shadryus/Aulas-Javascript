// callback function

//chamamos a função atributo dentro da função original e ele executa
function sayMyName(name){
  console.log('antes da callback')
  
  name()

  console.log('depois da callback')
}

//dentro da função outra função de atributo
sayMyName(
  () => {
    console.log('estou em uma callback')
  }
)