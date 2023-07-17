let nomes = ["João", "Maria", "Pedro", "Ana", "Lucas", "Laura", "anitta", "Fernando", "Mariana", "Gustavo"];

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Crie uma função que receba um vetor de números e retorne a soma de todos os elementos.
let contador = 0;
numeros.forEach(num => {
    contador += num
});
console.log("A soma de todos os elementos do vetor é : " + contador);

 
// Crie uma função que receba um vetor de palavras e retorne a concatenação de todas as palavras em uma única string.
let juncao = nomes.join(", ");
console.log(juncao, typeof(juncao));


// Crie uma função que receba um vetor de números e retorne o maior valor presente no vetor.
let maiorNumero = 0;
numeros.forEach(num => {
    if(num > maiorNumero)
    maiorNumero = num;
});
console.log(maiorNumero);


// Crie uma função que receba um vetor de números e retorne a média dos elementos.
let mediaNumero = 0;
let acumulador = 0;
contador = 0;
numeros.forEach(num => {
    contador++;
    acumulador += num;
});
mediaNumero = (acumulador/contador);
console.log("A media entre a soma de todos os elementos é : " + mediaNumero);


// Dado um array de números, utilize o método map para retornar um novo array com cada número elevado a 2.
let vetorElevado = (numeros.map(numero => numero ** 2))
console.log(vetorElevado);


// Dado um array de palavras, utilize o método filter para retornar um novo array contendo apenas as palavras que começam com a letra 'A'.
console.log("Os nomes que começam com a letra A são : " + nomes.filter(nome => nome[0] === "A" || nome[0] === "a"));


// Dado um array de números, utilize o método forEach para imprimir no console cada número multiplicado por 3.
numeros.forEach(numero => {
    console.log(numero * 3);
});


// Dado um array de números, utilize o método includes para verificar se o número 10 está presente no array.
console.log(numeros.includes(10));


