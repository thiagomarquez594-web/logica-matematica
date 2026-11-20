
const preguntas = [
    {
        texto: "Una función asigna un único resultado a cada entrada.",
        respuesta: true
    },
    {
        texto: "Una matriz está organizada en filas y columnas.",
        respuesta: true
    },
    {
        texto: "El producto cartesiano combina elementos de dos conjuntos.",
        respuesta: true
    },
    {
        texto: "Una relación siempre es una función.",
        respuesta: false
    },
    {
        texto: "Las leyes de De Morgan trabajan con negaciones lógicas.",
        respuesta: true
    }
];

let numeroPregunta = 0;
let puntos = 0;

function responder(respuestaUsuario) {
    if (numeroPregunta >= preguntas.length) {
        return;
    }

    const correcta = preguntas[numeroPregunta].respuesta;

    if (respuestaUsuario === correcta) {
        puntos++;
        document.getElementById("resultado").textContent = "¡Correcto!";
    } else {
        document.getElementById("resultado").textContent =
            "Incorrecto. ¡Seguimos practicando!";
    }

    document.getElementById("puntos").textContent = "Puntos: " + puntos;

    numeroPregunta++;

    if (numeroPregunta < preguntas.length) {
        document.getElementById("pregunta").textContent =
            preguntas[numeroPregunta].texto;
    } else {
        document.getElementById("pregunta").textContent =
            "¡Terminaste el juego!";

        document.getElementById("resultado").textContent +=
            " Resultado final: " + puntos + " de " + preguntas.length;

        document.querySelectorAll("#juego button").forEach(function(boton) {
            boton.disabled = true;
        });
    }
  }
        
