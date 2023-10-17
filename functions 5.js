// function hoisting

sayMyName();


// Sofre o hoist
/* function sayMyName(){
  console.log("Joe")
} */

var sayMyName = function sayMyName(){
  console.log("Joe")
}