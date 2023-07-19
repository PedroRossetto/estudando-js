

const galeria = ["/semafaro/assets/vermelho.png","/semafaro/assets/amarelo.png","/semafaro/assets/verde.png"];

let imagens = document.querySelector("#semaforo");
let b = 0;
let interval;


let vermelho = document.querySelector("#vermelho");
let amarelo = document.querySelector("#amarelo");
let verde = document.querySelector("#verde");
let auto = document.querySelector("#auto");


vermelho.addEventListener("click", () => {
    clearInterval(interval)
    imagens.src = galeria[0]
})

amarelo.addEventListener("click", () => {
    clearInterval(interval)
    imagens.src = galeria[1]
})


verde.addEventListener("click", () => {
    clearInterval(interval)
    imagens.src = galeria[2]
})

auto.addEventListener("click", () => {
    interval = setInterval(() => {
        imagens.src = galeria[b];
        if(b == (galeria.length-1)) {
            b = 0;
        }
        else {
            b++;
        }
    }, 3000);
});


