/* 
global scope
function scope
block scope 
*/

var a=5;    // global scope

function method1() {
    var b=10;   // function scope

    if(true){
        var c=15;   // block scope
    }
}    

// var: function scope -- ram bellekte cok fazla yer kaplar.
// let-const: block scope özelliğine sahiptir.


var a= 5;
var a= 10;
console.log(a); //mümkündür

// let b= 5;
// let b= 10;
// console.log(a); // mümkün değildir


// const (constant) : sabit, değişmez
const a= 5;
a= 10;
console.log(a); 

let b= 5;
b=7
console.log(b); //değişebilir
