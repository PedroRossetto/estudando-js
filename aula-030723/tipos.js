/* Tipagem estatica - Definicao de um tipo a cada variavel (Java, C, C++, TypeScript)
Tipagem dinamica - O tipo da variavel é definido de acordo com seu valor (JavaScript, Python)
*/
// Tipos primitivos
let variavel = 22;
console.log(typeof variavel);   // number
variavel = "Prof. Gabriel";
console.log(typeof variavel);   // string
variavel = true;
console.log( variavel);

console.log(typeof variavel)    // boolean

variavel = { nome: "Gabriel", idade: 31}  // object
console.log(typeof variavel);

variavel = [1, 2, 3, 4, 5];     // object
console.log(typeof variavel);

variavel = function() {     // função
    return 1
}

console.log(typeof variavel);

variavel = undefined; // indefinido
//-------------------*--------------------------------*--------------------------------*-----------------------//

let teste;
console.log(teste);  // undefined

variavel = null;
console.log(variavel); // null

variavel = NaN;
console.log(variavel);  // NaN - Not a Number

console.log(0/0);   // NaN