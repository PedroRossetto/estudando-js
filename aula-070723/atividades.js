// // Escreva um programa que imprima os números de 1 a 20 usando um loop for.
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

console.log("============================================================================")
console.log("============================================================================")
// // Escreva um programa que exiba os números de Fibonacci até o décimo termo. Os números de Fibonacci são formados pela sequência 0, 1, 1, 2, 3, 5, 8, 13, ... em que cada número é a soma dos dois anteriores. Use um loop while para gerar a sequência.
// // Fn = Fn - 1 + Fn -2
let p = 0;
let u = 1;
let i = 0;
while (i < 10) {
    let soma = p + u;
    console.log(p);
    p = u;
    u = soma;
    i++;
}

console.log("============================================================================")
console.log("============================================================================")
// Crie um programa que receba um número e calcule a soma de todos os números ímpares até esse número. Use um loop for e uma estrutura condicional if para verificar se cada número é ímpar.
let numero = 15;
let soma = 0;
for (let i = 1; i <= numero; i++) {
    if (!(i % 2 == 0)) {
        soma = soma + i;
    }
}
console.log(soma);

console.log("============================================================================")
console.log("============================================================================")
// // Faça um programa que receba um número e exiba a tabuada da soma desse número usando um loop for.
let num = 3;
for (let i = 1; i <= 10; i++) {
    console.log(num + " * " + i + " = " + (num*i))
}

console.log("============================================================================")
console.log("============================================================================")
// // // Crie um programa que exiba todos os números múltiplos de 7 de 1 a 100 usando um loop for e uma estrutura condicional if para verificar se cada número é múltiplo de 7.
let num7 = 100
for (let i = 1; i <= num7; i++) {
    if (!(i % 7 == 0)) {
        continue;
    }
    console.log(i)
}

console.log("============================================================================")
console.log("============================================================================")
// // Escreva um programa que receba um número e desenhe na tela um triângulo formado por "*".
let tamanhoT = 100;
let resultado = "";
for (let i = 0; i <= tamanhoT; i++) {
        resultado += "* ";
        console.log(resultado)
}



// //// TRIANGULO SUPREMO
// let altura = 10;
// let triangulo = "";
// for (let i = 0; i <= altura; i++) {

// }


// QUADRADO OCO
let lado = 5;
let linha = "";
for (let y = 1; y <= lado; y++) {
    linha = "";
    for (let x = 1; x <= lado; x++) {
        if(y == 1 || y == lado || x == 1 || x == lado) {
            linha += "@ ";
        }
        else {
            linha += "  ";
        }
    }
    console.log(linha);
}
