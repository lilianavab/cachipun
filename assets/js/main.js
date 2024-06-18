/*1. Solicitar al usuario las veces que desea que se repita el juego consecutivamente, es decir, cuántas veces deberá jugar contra la computadora.*/

let numeroJugadas = +prompt('Ingrese el número de jugadas');
let contador = 0;

/*2. Solicitar al usuario que indique su jugada: piedra,papel o tijera*/
while(contador < numeroJugadas) {
    let opcionesJugador = prompt('Ingrese tu jugada: piedra, papel o tijera');
    let jugadaMaquina = obtenerJugadaMaquina();

    console.log("Tu jugada:", opcionesJugador);
    console.log("Jugada de la máquina:", jugadaMaquina);

    Ganador(opcionesJugador, jugadaMaquina);
    contador++;
}

/*3. Generar una jugada automática para la máquina usando la función Math.random() de Javascript*/
function obtenerJugadaMaquina() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return 'piedra';
        case 1:
            return 'papel';
        case 2:
            return 'tijera';
    }
}

/*4. Definir a un ganador considerando la jugada del usuario y la generada automáticamente para la máquina*/
function Ganador(opcionesJugador, jugadaMaquina) {
    if (opcionesJugador === jugadaMaquina) {
        console.log("Empate"); /*5. Indicar el resultado de la partida dependiendo del caso*/
    } 
    if (
        (opcionesJugador === 'piedra' && jugadaMaquina === 'tijera') ||
        (opcionesJugador === 'papel' && jugadaMaquina === 'piedra') ||
        (opcionesJugador === 'tijera' && jugadaMaquina === 'papel')
    ) {
        console.log("Felicitaciones ganaste"); /*5. Indicar el resultado de la partida dependiendo del caso*/
    } 
    if (
        (opcionesJugador === 'piedra' && jugadaMaquina === 'papel') ||
        (opcionesJugador === 'papel' && jugadaMaquina === 'tijera') ||
        (opcionesJugador === 'tijera' && jugadaMaquina === 'piedra')
    ) {
        console.log("Lamentablemente perdiste contra la máquina."); /*5. Indicar el resultado de la partida dependiendo del caso*/
    }
}

