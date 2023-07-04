// Operadores de incremento e decremento
let pedro = 1;
pedro ++;
console.log(pedro)
pedro ++;
console.log(pedro)
pedro ++;
console.log(pedro)
pedro ++;
console.log(pedro)
pedro ++;
console.log(pedro)
pedro --;
console.log(pedro)

// Operadores relacionais
/*
    < --->  Menor que
    > ---> Maior que
    <= Menor ou igual
    >= Maior ou igual
    == Igual a
    === Igual a e mesmo tipo
    != Diferente  
*/

const n1 = 9;
const n2 = 11;
const n3 = 9;
const n4 = 13;
const n5 = "11"

pedro = n1 < n2;    //true
console.log(pedro);

pedro = n1 > n2;    //false
console.log(pedro);

//Precedencia Logica
/*
  1º ! > 2º && > 3º ||
*/

//          Operador ternário (mesma coisa que IF ELSE)
let mensagem;   
let nota = 6;//condicao      true            false
mensagem = (nota >= 7) ? "Aprovado" : "Reprovado";
console.log(mensagem);