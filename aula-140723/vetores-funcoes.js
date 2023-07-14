const nums = [6, 9, 0, 3, 8, 1, 4, 2, 5, 7, 7];
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


for(let num of nums) {
    console.log(num);
}

nums.forEach(num => {console.log(num)}); // itera sobre os elementos do vetor