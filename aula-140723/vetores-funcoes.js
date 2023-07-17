const nums = [0, 1, 2, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 9];
console.log(nums);

// nums.push(1); // Adiciona o elemento no final do vetor
// console.log(nums);

// nums.unshift(1); //adiciona um elemento no inicio do vetor
// console.log(nums);

// nums.pop(); // remove um elemento do final do vetor
// console.log(nums);

// nums.shift(); // remove um elemento no inicio do vetor
// console.log(nums);

// let juncao = nums.join(" - "); // fazer a juncao dos elementos do vetor e adicionando um valor entre eles, transforma em string
// console.log(juncao);

// let vetor2 = [5, 6, 7];
// let vetor3 = nums.concat(vetor2);   //  faz a juncao de 2 vetores em uma variavel
// console.log(vetor3);

// console.log(nums.sort()); // ordem alfabetica

// console.log(nums.reverse()); // gera um novo vetor com elementos do vetor na ordem reversa

// console.log(nums.includes(10)); // retorna um bolean - verdadeiro caso encontre o valor, falso se nao encontrar

// console.log(nums.fill(5, 5)); // substitui pelo valor 5 começando no indice 1

// console.log(nums.indexOf(8)); // retorna na posicao do indice

// console.log(nums);
// console.log(nums.splice(1, 3));   // remove elementos do meio do vetor - começa de qual indice, quantos (modifica o valor)

// console.log(nums.slice(2, 6)); // Corta do indice ate o indice

// for (let num of nums) {
//     console.log(num);
// }
// let acumulador = 0;

// nums.forEach((num) => {
//     console.log(num);
//     acumulador += num;
// }); // itera sobre os elementos do vetor
// console.log(acumulador);


// console.log(nums.reduce((acumulador, num) => (acumulador - num), 0)); // o 0 esta definindo qual valor o acumulador começa

console.log(nums.map(num => num * 2)); // multiplica todos os valores por *2 e gera um novo vetor

console.log(nums.find(num =>(num > 8))); // retorna o primeiro valor que corresponde a codicao especificada

console.log(nums.filter(num =>(num > 2))); // filtra quem atingir a condicao





// String como Vetor
let nome = `Prof. Gabriel Braga`;
let idade = 25;

let mensagem = ` 
Nome: ${nome} 
Idade: ${idade}
`;  // interpolacao     --> \n quebra linha

console.log(mensagem);

console.log(nome[0]);       // só funciona com strings