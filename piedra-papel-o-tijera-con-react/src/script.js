let puntosUsuario = 0;
let puntosPC = 0;

let instrucciones = document.querySelector("#instrucciones");
let contenedorPuntosUsuario = document.querySelector("#puntos-usuario");
let contenedorPuntosPC = document.querySelector("#puntos-computadora");
let mensaje = document.querySelector("#mensaje");
let contenedorGanaPunto = document.querySelector("#gana-punto");
let elegiTuArma = document.querySelector("#elegi-tu-arma");

let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPC = document.querySelector("#eleccion-computadora");

let botonesArmas = document.querySelectorAll(".arma");
botonesArmas.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
});

let cambiarNombreBtn = document.querySelector("#cambiar-nombre");
cambiarNombreBtn.addEventListener("click", cambiarNombre);

let reiniciarBtn = document.querySelector("#reiniciar");
reiniciarBtn.addEventListener("click", reiniciarJuego);



function reiniciarJuego() {
  
    puntosUsuario = 0;
    puntosPC = 0;
    
   
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorPuntosPC.innerText = puntosPC;

 
    instrucciones.innerText = " ";

    
    cambiarNombreBtn.style.display = "block";

    
    mensaje.classList.add("disabled");


    botonesArmas.forEach(boton => {
        boton.disabled = false;
    });
}

   


function iniciarTurno(e) {
    
    let eleccionPC = Math.floor(Math.random() * 3);
    let eleccionUsuario = e.currentTarget.id;

    if (eleccionPC === 0) {
        eleccionPC = "Piedra";
    } else if (eleccionPC === 1) {
        eleccionPC = "Papel"
    } else if (eleccionPC === 2) {
        eleccionPC = "Tijera"
    }

  

    if (
        (eleccionUsuario === "Piedra" && eleccionPC === "Tijera") ||
        (eleccionUsuario === "Tijera" && eleccionPC === "Papel") ||
        (eleccionUsuario === "Papel" && eleccionPC === "Piedra")
    ) {
        ganaUsuario();
    } else if (
        (eleccionPC === "Piedra" && eleccionUsuario === "Tijera") ||
        (eleccionPC === "Tijera" && eleccionUsuario === "Papel") ||
        (eleccionPC === "Papel" && eleccionUsuario === "Piedra")
    ) {
        ganaPC();
    } else {
        empate();
    }

    mensaje.classList.remove("disabled");
    contenedorEleccionUsuario.innerText = eleccionUsuario;
    contenedorEleccionPC.innerText = eleccionPC;

    if (puntosUsuario === 5 || puntosPC === 5) {

        if (puntosUsuario === 5) {
            instrucciones.innerText = "¡Ganaste el juego!"
        }

        if (puntosPC === 5) {
            instrucciones.innerText = "La computadora ha ganado!"
        }

        elegiTuArma.classList.add("disabled");
        reiniciar.classList.remove("disabled");
        reiniciar.addEventListener("click", reiniciarJuego);
    }
}

function ganaUsuario() {
    puntosUsuario++;
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorGanaPunto.innerText = "Bueno, ganaste esta"
}

function ganaPC() {
    puntosPC++;
    contenedorPuntosPC.innerText = puntosPC;
    contenedorGanaPunto.innerText = "Alpiste, perdiste"
}

function empate() {
    contenedorGanaPunto.innerText = "Te imagino la cara, asi que Empate"
}

function reiniciarJuego() {
    reiniciar.classList.add("disabled");
    elegiTuArma.classList.remove("disabled");
    mensaje.classList.add("disabled");

    puntosUsuario = 0;
    puntosPC = 0;
    
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorPuntosPC.innerText = puntosPC;

}