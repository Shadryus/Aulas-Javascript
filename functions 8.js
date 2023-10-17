/* 
  Function() constructor

  * expressão new
  * criar um novo objeto
  * this keyword
  
*/

// o name depois do = é do parametro name no parenteses
function Person(name) {
  //mayk agora tem uma propriedade name
  this.name = name //O this referencia a const mayk la fora
  this.walk = function(){
    return this.name + " esta Andando"
  }
}

// Ao usar o new torna a Person uma função construtora
const mayk = new Person("Mayk") //o argumento "Mayk" está armazenado no parametro name
const joao = new Person("Joao")
console.log(mayk.walk())
console.log(joao.walk())