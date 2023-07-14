// Funcao

// let n1 = 7;
// let n2 = 9;
// function somar(n1, n2 = 10, mostrarNuns = false) {
//     //parametros
//     if (mostrarNuns) {
//         console.log("Numero 1 é : " + n1);
//         console.log("Numero 2 é : " + n2);

//     }
//     console.log("A soma é : " + (n1 + n2));
// }

// let result = somar(30, 5, true); //argumentos

// console.log(result);

// Vantangens: leitura, reutilização, manutenção //

//Funcoes que recebem parametros
//Funcoes que recebem nao parametros
//Funcoes que retornam valores
//Funcoes que retorna valor

// function soma(n3, n4 = 10) {
//     let resultadoSoma = n3 + n4;
//     return resultadoSoma;
// }

// let result2 = soma(4, 74);

// console.log(result2);

// function calc(n1, n2, op = "+") {
//     switch (op) {
//         case "+":
//             return n1 + n2;
//         case "-":
//             return n1 - n2;
//         case "/":
//             return n1 / n2;
//         case "*":
//             return n1 * n2;
//     }
//     return NaN;
// }

// console.log(calc(5, 5, "/"));

// Entrada - Parametros argumentos
// Processamento - Código que vai ser executado
// Saida - Return


function desenhaTriangulo(altura) {
    for (let i = 1; i <= altura; i++) {
        let linha = "";
        for(let j = 0;  j < (altura-i); j++) {
            linha += " ";
        }
        console.log(linha);
        for(let j = 0; j < i; j++) {
            linha += " * "
        }
        console.log(linha);
    }
}

desenhaTriangulo(7);