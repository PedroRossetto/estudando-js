const email = document.querySelector("#email");
const campos = document.querySelectorAll("input, textarea");

function validarEmail() {
    const valor = email.value;
    if(valor.includes("@")) {
        email.style.borderColor = "green";
    }
    else {
    email.style.borderColor = "red";
    }
}



function validarCampoVazio(evento) {  // Event
    const campo = evento.target;
    const valor = campo.value;
    if(valor == "") {
        campo.style.borderColor = "red";
    }
    else {
    campo.style.borderColor = "darkgreen";
    }
}




// email.addEventListener("keyup", validarEmail);

// for(let campo of campos) {
//     campo.addEventListener("change", validarCampoVazio)
// };


function validarCampoVazio2(evento) {  // Event
    const campo = evento.target; // objeto target representa o elemento q acionou o evento
    const valor = campo.value;
    if(valor == "") {
        campo.style.borderColor = "red";
    }
    else {
    campo.style.borderColor = "#767676";
    }
}


for(let campo of campos) {
    campo.addEventListener("blur", validarCampoVazio2); // blur --> evento perde o foco
};