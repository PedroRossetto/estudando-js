// Crie uma função que calcule o valor médio de três números, considerando que esses teram pesos 2, 3, 4 respectivamente
function mediaPonderada(n1, n2, n3) {
    return (n1 * 2 + n2 * 3 + n3 * 4) / 9;
}
console.log("Media ponderada entre 6, 7, 8 é " + mediaPonderada(6, 7, 8));

// Crie uma função que receba um número inteiro e retorne a quantidade de divisores desse número
function numDivisores(n1) {
    let qnt = 0;
    for (let i = 2; i <= n1; i++) {
        if (n1 % i == 0) {
            qnt++;
        }
    }
    return qnt;
}
console.log(numDivisores(67));

// Crie uma função que calcule a soma de todos os dígitos de um número
function numDigitos(num) {
    let numTexto = num.toString();
    let acumulador = 0;
    for (let i = 0; i < numTexto.length; i++) {
        acumulador += parseInt(numTexto.charAt(i));
    }
}

// Crie uma função que receba uma string e retorne a mesma string, mas com todas as letras em ordem inversa
function reverterTexto(texto) {
    let textoRevertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        textoRevertido += texto.charAt(i);
    }
    return textoRevertido;
}

console.log(reverterTexto("Pedro Arthur Rossetto"));

// Crie uma função que receba os valores de comprimento e tempo e retorne a velocidade média
function velocidadeMedia(comprimento, tempo) {
    return comprimento / tempo;
}

// Crie uma função que receba uma string e retorne outra string com todas as vogais removidas
function isVogal(char) {
    switch (char.toLowerCase) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            return true;
    }
    return false;
}

function removeVogais(texto) {
    let textoSemVogal = "";
    for (let i = 0; i < texto.length; i++) {
        let char = texto.charAt(i);
        if(!isVogal(char)) {
            textoSemVogal += char;
        }
    }
}

// Crie uma função que receba um receba um número no sistema decimal e retorne o mesmo número no sistema binário
// function converterDecimalBinario(num) {
//     let numBinario = "";
//     let divisao = num;
//     for(;;) {
//         let resto = divisao % 2;
//         resto = parseInt(divisao / 2);
//         numBinario = resto + numBinario;
//     }
//     return numBinario;
// }

// console.log(converterDecimalBinario(345));

// Crie uma função que receba um número e uma outra função e execute essa de acordo com número informado


function repetir(callback, interation) {
    for (let i = 0; i < interation; i++) {
        callback(i);
    }
}

repetir(index => console.log("Repetição #"+(index+1)), 10);