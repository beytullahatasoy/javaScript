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

