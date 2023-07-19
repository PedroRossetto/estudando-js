const btns = document.querySelectorAll(".press");
const btnAC = document.querySelector("#ac");
const btnCalc = document.querySelector("#calc");
const visor = document.querySelector("#visor");

for (let btn of btns) {
    btn.addEventListener("click", (evento) => {
        const text = evento.target.innerText;
        visor.value += text;
    });
}

btnAC.addEventListener("click", () => {
    visor.value = "";
});

btnCalc.addEventListener("click", () => {
    let expressao = visor.value.replaceAll(",", ".");
    let resultado = eval(expressao).toFixed(4).replaceAll(".", ",");
    visor.value = resultado;
});
