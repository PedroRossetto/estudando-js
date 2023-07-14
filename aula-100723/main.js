

// let num1 = 4;
// let num2 = 5;
// function multiplicar() {
//     console.log("O primeiro numero é " + num1);
//     console.log("O segundo numero é " + num2);
//     console.log("O produto é : " + (num1*num2));
// }

// multiplicar();

const num = 3.14;

let result = isNaN(num);
console.log(result);
console.log(isNaN(num));


result = isFinite(num);
console.log(result);

result = parseInt(num);
console.log(result);


let numero = 22.5400036;
console.log(numero.toFixed(9));


// funcoes de texto

const texto = "Java Script ";

console.log(texto.charAt(1)) // pega uma letra em determinada posicao

console.log(texto.concat(" é", " muito bacana"));

console.log(texto.trim()); //tira espaços iniciais e finais em branco

console.log(texto.replace(" ", ""))

console.log(texto.includes("Java"));

console.log(texto.toLowerCase());
console.log(texto.toUpperCase());

console.log(texto.toLowerCase().includes("java"));

console.log(texto.indexOf("ipt"));

console.log(texto.substring(0, 6));

// Funcao matematica

console.log(Math.ceil(2.3678)); // arredonda pra cima
console.log(Math.floor(2.368)); // arredonda pra baixo
console.log(Math.round(2.67)); // arredonda para o mais proximo
console.log(Math.sqrt(675));// raiz quadrada
console.log(Math.abs(8.65)); //valor absoluto
console.log(Math.floor(Math.random()*20+10)); //numero aleatorio [0 , 1] (nessa caso do 1 ao 10000)

