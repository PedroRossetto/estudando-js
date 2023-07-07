// numero positivo, negativo ou zero
let numero = -1;

if (numero == 0) console.log("Esse número é igual a zero");
else if (numero <= -1) console.log("Esse é um numero negativo");
else console.log("Esse é um numero positivo"); 

// menor ou maior de idade
let idade = 1;

if (idade >= 18) console.log("É maior de idade")
else if (numero <18) console.log("Menor de idade")
else console.log("Digite apenas números");

// tres numeros e diga qual é o maior
let num1 = 115, num2 = 70, num3 = 20;

if (num1 > num2 && num1 > num3) console.log("O maior número é : " + num1)
else if (num2 > num1 && num2 > num3) console.log("O maior número é : " + num2)
else if (num3 > num1 && num3 > num2) console.log("O maior número é : " + num3)
else console.log("Digite um número, letras não são válidas!");

// 2 numeros > produto , verificar se é par ou impar
let number1 = 5, number2 = 6, calculo = ((number1*number2)%2);

if (calculo != 0) console.log("Esse produto é impar!")
else console.log("Esse produto é par!");

// Programa que recebe dia da semana e exiba se é final de semana ou dia util
let dia = "domingo";

if (dia == "Segunda" || dia == "Terça" || dia == "Quarta" || dia == "Quinta" || dia == "Sexta") console.log("É dia útil")
else if (dia == "Sabado" || dia == "Domingo") console.log("É final de semana! :D ")
else console.log(dia + " precisa estar sem -feira e a primeira letra deve ser maiuscula");

// Rebeca n de 1 a 7 e exiba dia da semana correspondente
let n1 = 7;

switch (n1) {
    case 1: console.log("Segunda-Feira")
        break;
    case 2: console.log("Terça-Feira")
        break;
    case 3: console.log("Quarta-Feira")
        break;
    case 4: console.log("Quinta-Feira")
        break;
    case 5: console.log("Sexta-Feira")
        break;
    case 6: console.log("Sábado")
        break;
    case 7: console.log("Domingo")
        break;
}