// Par ou impar 
let numero = 10;
let par_impar;
par_impar = ((numero % 2) == 0) ? "Par" : "Impar"; 
console.log(par_impar)

// Media aritmetica de 3 numero
let num1 = 5;
let num2 = 8;
let num3 = 7;
let media = (num1 + num2 + num3)/3;
console.log(media)

// Numero divisivel pro 3 e 5 ao mesmo tempo
let numeroD = 15;
let divisivel;
divisivel = ((numeroD%3 || numeroD%5) == 0) ? "Divisivel por 3 e 5" : "Não divisivel por 3 e 5";
console.log(divisivel)

// Area triangulo
let base = 5;
let altura = 10;
let area = (base*altura)/2;
console.log(area);

// Temperatura de celsius para fahrenheit
let tempC = 21;
let tempF = (tempC*1.8) + 32;
console.log(tempF);

// Calcular delta da função de segundo grau
let a = 7;
let b = 3;
let c = 4;
let delta = ((b**2) - (4*a*c));
console.log(delta);

// Pode dirigir?
let idade = 18;
let verificar = (idade >= 18) ? "Pode dirigir" : "Não pode dirigir";
console.log(verificar);