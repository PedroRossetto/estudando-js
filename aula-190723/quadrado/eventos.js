// Evento --> Ação que é executada (Clique, teclar, movimentar cursor)

// click --> Clique do mouse
// dblclick -> Duplo clique do mouse
// keydown -> Aperta o botao
// keyup -> Soltar o botao
// mouseover -> Quando o ponteiro é colocado sobre o elemento
// mouseout --> Quando o ponteiro sai desse elemento
// submit --> Submeter os dados de um formulário
// change --> Alterar o valor de um campo de formulario
// focus --> Indica quando campo esta em foco / selecionado


const quadrado = document.querySelector("#quadrado");

function getRndInteger(min, max) {
    return x = Math.floor(Math.random() * (max - min) ) + min, y = Math.floor(Math.random() * (max - min) ) + min
  }

quadrado.onclick = () => {
    quadrado.style.backgroundColor = "black";
    // quadrado.style.borderRadius = "100px";
    quadrado.style.transform = "translateY(0px)"
};

quadrado.ondblclick = () => {
    quadrado.style.transform = "translateY(0px)"
    quadrado.style.backgroundColor = "darkcyan";
};

function changeColorSquare() {
    quadrado.style.backgroundColor = "darkgreen";
}

quadrado.addEventListener("mouseout", () => {
    quadrado.style.backgroundColor = "salmon"
});


console.log(quadrado);


