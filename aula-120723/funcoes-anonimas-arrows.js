// function  somar(n1, n2) {
//     let soma = n1 + n2;

//     return soma;
// }

// function dividir(num, den) {
//     if(den == 0)
//         return;
//     return (num / den);
// }

// const num = dividir(22, 0)
// console.log(num);

// callback --> Função que é passada como parametro de outra função

// callbackError é um parametro para um funcao (no caso esta usando a funcao erro) dentro da funcao podemos dar outros nome

// no caso o nome do parametro é callbackError, mas ele pode pegar qualquer funcao com nome diferente

// let numError = 0;

// function requisicaoParaBanco(callbackSuccess, callbackError) {
//     for (let i = 0; i < 900900090; i++) {  // isso vai demorar alguns segundos
//         if (i === 1) {//aqui gerou um erro OMG
//             callbackError();
//         }
//     }
//     callbackSuccess();
// }

// function erro() {
//     numError++;
//     console.log("Eita como dá probleminha 😆😳😳😳");
// }

// function sucesso() {
//     console.log("Helicoptere Helicoptere 🚁🚁🚁🚁");
// }

// requisicaoParaBanco(sucesso, erro);

// Funcao Anonima

// setTimeout(function() {
//     console.log("Olá, mundo!");
// }, 3000);

// setInterval(function() {
//     console.log("AAAAAAAAAAAAAAAAA");
// }, 10000);

// Arrow Functions - Funções de seta -> Funções anônimas

// setTimeout(function () {
//     console.log("Função anonima");
// }, 2000);

// setTimeout(() => {
//     console.log("Funcao anonima com arrow function");
// }, 3000);

// (resultado, requisicao) => {
//     console.log(resultado + " " + requisicao)
//     return 0;
// };

// Testando a utilizacao das arrow functions

function teste(callback) {
    let valor = callback(100);
    console.log(valor);
}

// Primeira forma
function callback(numero) {
    // Funcao expression
    return 2 * numero;
}
teste(callback);

// Segunda forma
teste(function (numero) {
    // Funcao anonima
    return numero * 3;
});

// Terceira forma ------- Arrow - Modo 1
teste((numero) => {
    return numero * 4;
});

// Quarta forma ------- Arrow - Modo 2 (só funciona quando se tem 1 parametro)
teste(numero => numero * 5);


setTimeout(() => console.log("Oi"),  3000);
setTimeout(_ => console.log("Oi"),  3000); //nao precisa de parametro


// Recursividade -> Chamada de uma funcao pela mesma funcao

function fatorial(numero) {
    if(numero == 1) {
        return 1;
    }
    return numero * fatorial(numero -1);
}

// 4! = 24

console.log(fatorial(4));