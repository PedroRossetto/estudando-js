// Vetores - Arrays
let nota = 9; // variaveis simples
let notas = [9.5, 5.0, 7.8, 8.5, 5.5]; // variaveis compostas
let times = ["Botafogo", "Gremio", "Flamengo"];
let ativados = [true, false, false, true];
let daniel = ["Daniel", 23, "Ensino Superior", true]; // uma má prática

console.log(typeof times);

let pesos = [89.5, 60.0, 45.6, 72.5, 105.6];
// console.log(pesos.length);
// console.log(pesos[0]);
// console.log(pesos[pesos.length-1]); //mostra o ultimo
// console.log(pesos[0] + pesos.length-1);

for (let i = 0; i < pesos.length; i++) {
    console.log(pesos[i]);
}

console.log("Vetor invertido");

for (let i = pesos.length - 1; i >= 0; i--) {
    console.log(pesos[i]);
}


// vetor com funções - totalmente valido
let operacoes = [
    (n1, n2) => n1 + n2,
    (n1, n2) => n1 - n2,
    (n1, n2) => n1 * n2,
    (n1, n2) => n1 / n2
];
console.log(operacoes[3](4, 6));


// ------------------//

console.log(pesos); 
pesos[1] = 500  //modifica só 1
console.log(pesos);


let acumulador = 0;
for (let i = 0; i < pesos.length; i++) { //multiplicou todos os numeros do vetor
    acumulador += pesos[i];
}
console.log(acumulador*2);


for(let peso of pesos) { //for each ---> usar esse para vetores
    console.log(peso);
}

for(let index in pesos) { //pega os indice dos vetores -- 
    console.log(index);
    console.log(pesos[index]);   //tbm da pra pegar os valores juntos
}


// pesos.forEach(peso => {
//     console.log(peso + " 1");
// });