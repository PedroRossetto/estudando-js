/*  Uma quantidade determinada de repetições

for (inicializacao; condicao; incrementacao) {
    repeticao....
}

Uma quantidade indeterminada de repetições
while(condicao) {
    repeticao....
}
*/

console.log("TESTE 1")
console.log("TESTE 2")

let i = 0;
while(i < 10) {
    console.log("TESTE WHILE" + i);
    i++;
}

console.log("TESTE 3")
console.log("TESTE 4")

// Desenha uma quadrado de # na tela
let lado = 7;
let linha = "";
for(let i = 0; i < lado; i+= 7) { // vai imprimir todas as 7 linhas 
    let linha = "";
    for(let j = 0; j < lado; j++) { //esta fazendo as linhas com 7 #
        linha += "# "
        console.log(linha);
    }
}

// bubble sort
console.log("-------------------------------------")
console.log("-------------------------------------")

for(let i = 0; i < lado; i++) {
    linha += "# ";
}

for(let i = 0; i <lado; i++) {
    console.log(linha);
}

// break e continue
for(let i = 1; i <= 20; i++) {  // ignora todos os impares
    if(!(i % 2 == 0)) {
        continue; //pular o loop
    }
    console.log(i)
}

for(let i = 1; i <= 100; i++) {   //multiplos de 8
    if((i % 8 == 0) && (i != 8)) {
        console.log(i);
        break;  //quando chegar no primeiro multiplo de 8 ele vai quebrar tudo e descontinuar
    }
}