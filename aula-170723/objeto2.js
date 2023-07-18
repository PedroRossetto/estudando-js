// class Pessoa {
//     nome;
//     idade;
//     email;
// }

// let pessoa1 = new Pessoa();
// pessoa1.nome = "Pedro";
// pessoa1.idade = 21;
// pessoa1.email = "pedro@example.com";



// const pessoa2 = {
//     nome: "Aline",
//     idade: 24,
//     email: "aline@example.com"
// };

// console.log(pessoa1);


// console.log();

const pc = {
    ram: 32,
    disco: 1,
    processador: "ryzen 9700x",
    fonte: "1000w",
    placaMae: "Gigabyte"
}

const saldo = 4800;

if(saldo > 4000) {
    pc.placaVideo = "RTX 4090";
}

// console.log(pc);
//FORMA INCORRETA DE COPIA OBJETO
// let objeto1 = { nome: "Bruna", curso: "JavaScript" };
// let objeto2 = objeto1;      //não é feito uma copia do objeto e sim uma referencia dele na memoria, ele aponta para o mesmo local
// objeto1.nome = "Bruna Muller";

// console.log(objeto1);
// console.log(objeto2);


//  FORMA CORRETA DE COPIAR UM OBJETO   --> Operador spread "..."
let objeto1 = { nome: "Bruna", curso: "JavaScript" };
let objeto2 = {...objeto1};      
objeto1.nome = "Bruna Muller";
console.log(objeto1);
console.log(objeto2);


delete objeto1.nome; //apaga a propriedade do obj
console.log(objeto1);