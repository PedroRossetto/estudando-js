// Document Object Model - representa toda hierarquia da pagina 

// window.document --> Objeto que representa o document HTML
// window.document.getElementById(); --> Busca pelo id do document
// document.getElementByClassName(); --> Busca todos os elementos por class
// document.getElementsByTagName(); --> Busca todos os elementos pela tag
// document.querySelector() --> Busca do elemento com base no seu seletor CSS




let h1 = document.getElementById("titulo"); // é muito utilizado
// console.log(h1);

let paragrafos = document.getElementsByClassName("paragrafo"); // retorna um vetor de paragrafos

// paragrafos[0].hidden = true

let negritos = document.getElementsByTagName("b");  // pouco utilizado

let campoEmail = document.querySelector("input[type=email]");
let negritoParagrafo = document.querySelector("p b"); // é muito aplicado hoje
let negritoParagrafos = document.querySelectorAll("p b"); // é muito aplicado hoje
let titulo = document.querySelector("#titulo");

// titulo.align = "right";
// titulo.title = "Titulo principal";
// titulo.style.color = "cyan";
// titulo.style.fontSize = "35px";
let paragrafo = document.querySelector(".paragrafo");
paragrafo.innerHTML = "Hoje na aula de JavaScript conversamos sobre DOM. <b>Jogão!! </b> Entendi muita coisa. Da para criar muitas ideias.";



// uso de clasess com js
let caixa = document.querySelector('#informe');
caixa.classList.add("erro");
caixa.classList.remove("erro");
caixa.classList.toggle("atencao");  // adiciona se nao existe
caixa.classList.toggle("atencao");  // se existe ele remove
console.log(caixa);