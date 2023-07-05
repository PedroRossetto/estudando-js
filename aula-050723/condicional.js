2; // Estruturas condicionais
// Condição -> Calculo Lógico

const altura = 1.61;

if (altura >= 1.61) 
    console.log("Entrou no brinquedo! :D");
else 
    console.log("Não entra! >:C");


let nivelIngles = 5; // 1 iniciante, 2 basico, 3 intermediario, 4 avançado 5 expert
if(nivelIngles == 1)
    console.log("Nivel Iniciante")
else if(nivelIngles == 2)
    console.log("Nivel básico")
else if(nivelIngles == 3)
    console.log("Nivel intermediário")
else if (nivelIngles == 4)
    console.log("Nivel avançado")
else if (nivelIngles == 5)
    console.log("Nivel Expert")
else 
    console.log("Apenas níveis de 1 a 5");



let saldo = 1550;
if (saldo > 100) 
    console.log("Comprar um livro");
if (saldo > 200)
    console.log("Comprar um tênis");
if (saldo > 1000)
    console.log("Comprar uma bolsa");


let opcao = "Editar";
if(opcao == "Arquivo")
    console.log("Novo, Abrir, Configurações")
else if(opcao == "Editar")
    console.log("Desfazer, Refazer")
else if(opcao == "Selecao")
    console.log("Selecionar, Expandir, Diminuir");



let conseguiuFazerCompra = false;
let saldo2 = 100;
if(saldo2 > 200) { 
    console.log("Fez a compra do tenis");  // oq esta dentro do {} é feito tudo junto, aqui estao sendo aplicada duas regras
    conseguiuFazerCompra = true; 
}
else {
    console.log("Sem dinheiro suficiente");
    conseguiuFazerCompra = false;
}

console.log(conseguiuFazerCompra);

// Aninhamento de IFs

let num1 = 200, num2 = 200, num3 = 200;

if(num1 > num2 && num1 > num3) { //Se numero 1 for maior que numero 2 e 3 então
    if(num2 > num3) { // se numero 2 for maior que 3
        console.log(num1 + " > " + num2 + " > " + num3);
    }
    else {  //senao
        console.log(num1 + " > " + num3 + " > " + num2);
    }
}
else if(num2 > num1 && num2 > num3) { //Se numero 2 for maior que numero 1 e 3 entao
    if(num1 > num3) { // se numero 1 for maior que 3
        console.log(num2 + " > " + num1 + " > " + num3);
    }
    else { //senao
        console.log(num2 + " > " + num3 + " > " + num1);
    }
}
else if(num3 > num1 && num3 > num2) { //Se numero 3 for maior que numero 2 e 1
    if(num1 > num2) { //se numero 1 for maior que 2
        console.log(num3 + " > " + num1 + " > " + num2);
    }
    else { //senao
        console.log(num3 + " > " + num2 + " > " + num1);
    }
} // Se nenhuma das condições acimas forem atendidas
else console.log("Todos são iguais");