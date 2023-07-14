// Escreva um programa que receba um texto e calcule a quantidade de letra de "a". O programa deve considerar maisculas e minusculas.
let texto = "Hoje fui na casa de Ana e jogamos Valorant.";
let numerosDeA = 0;
for (let i = 0; i < texto.length; i++) {
    if (texto.charAt(i) == "A" || texto.charAt(i) == "a") {
        numerosDeA++;
    }
}
console.log(texto + " Tem " + numerosDeA + " 'A's ")

// Escreva um programa que calcule a raiz quadrada de um número e mostre na tela.

let num = 25;
console.log("A raiz quadrada de " + num + " é " + Math.sqrt(num));
console.log(32 ** (1/5));  //raiz quintupla de 32


// Escreva um programa que  arredonde um número para o inteiro mais próximo.

num = 134.554
console.log(num + " arredondando para o mais proximo é " + Math.round(num));

// Escreva um programa que  calcule o valor absoluto de um número.

num = -89;
console.log("O valor absoluto de " + num + " é " + Math.abs(num));


// Escreva um programa que  gere um número aleatório entre 10 e 20.
let numRandom = Math.floor(Math.random() * (20 - 10 + 1) + 10)
console.log(numRandom);

// Arredonde um número para um número específico de casas decimais.
num = 10;
console.log(num.toFixed(2))


// Escreva um programa que  converta uma string para um número decimal e arredonde para o número inteiro anterior.
let texto2 = "96.43343";
texto = parseFloat(texto2);
console.log(Math.floor(texto));


// Verifique se um número é um valor finito, infinito, NaN ou não.

let numeroTeste = 50;

if (isNaN(numeroTeste)) {
    console.log(numeroTeste + " Não é um número!");
} else {    
    if (isFinite(numeroTeste)) {
        console.log(numeroTeste + " é finito!");
    } else {
        console.log(numeroTeste + " é infinito");
    }
}

// Escreva um programa que verifique se a string "ba" contém em outras outra string.
texto = "Minha mae fez doce de batata mais eu gosto é de doce de goiaba.";
if(texto.includes("ba")){
    console.log("Contem 'ba'");
}
else {
    console.log("Não contem 'ba' ");
}

// Escreva um programa que  converte uma string para letras maiúsculas e para letras minúsculas e mostre na tela.
console.log(texto.toUpperCase);
console.log(texto.toLowerCase);


// Extraia uma parte específica de uma string com base em índices.
console.log("De 0 a 18 tem-se '" +texto.substring(0, 18) + "'");


// Substitua todas as ocorrências de uma substring por outra em uma string.
console.log(texto.replaceAll("doce", "salgado"));


// Remova espaços em branco extras no início e no final e no final de uma string.
console.log(texto.trim());


// Inverta uma string. Utilize o laço for.
let textoInvertido = "";
for (let i = texto.length-1; i >=0; i--) {
    textoInvertido += texto.charAt(i);
}
console.log(textoInvertido);

