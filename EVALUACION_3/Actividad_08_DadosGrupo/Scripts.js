const Jugador1 = document.querySelector('.jugador_1');
const Jugador2 = document.querySelector('.jugador_2');

const Puntaje1 = document.querySelectorAll('.puntaje');

const PuntajeActual1 = document.getElementById('turno-actual-1')
const PuntajeActual2 = document.getElementById('turno-actual-2')


const Dado = document.getElementById('dado');


const btnNuevo = document.querySelector('.bnt_nuevo');
const btnLanzar = document.querySelector('.btn_lanzar');
const btnPasar = document.querySelector('.btn_pasar');

const diceEmojis = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

let Puntajes, PuntajeActual, JugadorActual, Jugando;

const IniciarJuego = () => {

    Puntajes = [0, 0];
    PuntajeActual = 0;
    JugadorActual = 0;
    Jugando = true;

    Puntaje1[0].textContent = 0;

    PuntajeActual1.textContent = 0;
    PuntajeActual2.textContent = 0;

    Dado.classList.add('dHidden');

    Jugador1.classList.add('jugador_activo');
    Jugador2.classList.remove('jugador_activo');

    Jugador1.classList.remove('ganador');
    Jugador2.classList.remove('ganador');
};


const CambiarJugador = function(){
    if(JugadorActual === 0){
        PuntajeActual1.textContent = 0
    } else{
        PuntajeActual2.textContent = 0;
    }

    PuntajeActual = 0;
    if (JugadorActual === 0) {
        JugadorActual = 1;
        } else {
        JugadorActual = 0;
    }

    Jugador1.classList.toggle('jugador_activo');
    Jugador2.classList.toggle('jugador_activo');
};


btnLanzar.addEventListener('click', function () {
    if (!Jugando) return;

    const numero = Math.trunc(Math.random() * 6) + 1;

    Dado.classList.remove('dHidden');
    Dado.textContent = diceEmojis[numero - 1];

    if (numero !== 1) {
        PuntajeActual += numero;

        if (JugadorActual === 0) {
            PuntajeActual1.textContent = PuntajeActual;
        } else {
            PuntajeActual2.textContent = PuntajeActual;
        }

    } else {
        CambiarJugador();
    }
});


btnPasar.addEventListener('click', function () {
    if (!Jugando) return;

    Puntajes[JugadorActual] += PuntajeActual;

    Puntaje1[JugadorActual].textContent = Puntajes[JugadorActual];

    if (Puntajes[JugadorActual] >= 15) {
        Jugando = false;
        Dado.classList.add('dHidden');

        if (JugadorActual === 0) {
            Jugador1.classList.add('ganador');
        } else {
            Jugador2.classList.add('ganador');
        }

    } else {
        CambiarJugador();
    }
});


btnNuevo.addEventListener('click', IniciarJuego);

IniciarJuego();








