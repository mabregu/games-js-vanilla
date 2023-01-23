const PIEDRA = 0;
const PAPEL = 1;
const TIJERA = 2;

const OPCIONES = {
    0: "Piedra",
    1: "Papel",
    2: "Tijera"
}

function getOption() {
    let options = document.getElementsByName("opcion");
    
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            return options[i].value;
        }
    }
}

function resultado(opcionJugador, opcionMaquina) {
    let nombre_jugador = document.getElementById("name");

    if (opcionJugador === opcionMaquina) {
        return "Empate 😟";
    } else if (opcionJugador === PIEDRA && opcionMaquina === TIJERA) {
        return `Ganaste ${nombre_jugador.value} 😎`;
    } else if (opcionJugador === PAPEL && opcionMaquina === PIEDRA) {
        return `Ganaste ${nombre_jugador.value} 😎`;
    } else if (opcionJugador === TIJERA && opcionMaquina === PAPEL) {
        return `Ganaste ${nombre_jugador.value} 😎`;
    } else {
        return "Perdiste 😭";
    }
}

function payload(opcionJugador, opcionMaquina, callback) {
    let result = document.getElementById("result");
    let resultado = callback(opcionJugador, opcionMaquina);
    let html = `
        <p>Tu opcion es: <b>${OPCIONES[opcionJugador]}</b></p>
        <p>La opción de la máquina es: <b>${OPCIONES[opcionMaquina]}</b></p>
        <p>${resultado}</p>
    `;
    
    result.innerHTML = html;
}

function jugar() {
    let opcionJugador = parseInt(getOption());
    let opcionMaquina = Math.floor(Math.random() * 3);
    
    payload(opcionJugador, opcionMaquina, resultado);
}

function validarNombre() {
    let nombre_jugador = document.getElementById("name");
    let btn_jugar = document.getElementById("btn_jugar");

    if (nombre_jugador.value === "") {
        btn_jugar.disabled = true;
    } else {
        btn_jugar.disabled = false;
    }
}

validarNombre()