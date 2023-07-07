// Estruturas de Repetições

 //a declaracao da variavel tbm pode ir dentro do for - mas se for declarada lá, nao vai funcionar no resto do codigo


//  atribuicao   condicao   atualizacao de número
// for(let numero = 0; numero <= 100; ++numero) {
//     console.log(numero)
// } 

let num = 7;
let ePrimo = true;

for(let i = 2; i < num; i++) {
    if(num % i == 0) {
        ePrimo = false;
    }
}

if(ePrimo) {
    console.log("É Primo")
}
else {
    console.log("Não é primo")
}

// for --> Tem uma quantidade de repetições determinadas
// while --> Tem uma quantidade de repetições indeterminadas