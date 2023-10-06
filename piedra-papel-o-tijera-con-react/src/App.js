import React, { useState } from 'react';
import './styles.css';

function App() {
  const [nombreJugador, setNombreJugador] = useState('Jugador');
  const [puntosUsuario, setPuntosUsuario] = useState(0);
  const [puntosComputadora, setPuntosComputadora] = useState(0);
  const [eleccionUsuario, setEleccionUsuario] = useState(null);
  const [eleccionComputadora, setEleccionComputadora] = useState(null);
  const [mensaje, setMensaje] = useState('');

  const opciones = ['piedra', 'papel', 'tijera'];

  const cambiarNombre = () => {
    const nuevoNombre = prompt('Ingrese un nuevo nombre:');
    if (nuevoNombre) {
      setNombreJugador(nuevoNombre);
    }
  };

  const jugar = (eleccion) => {
    const eleccionComputadora = opciones[Math.floor(Math.random() * 3)];
    setEleccionUsuario(eleccion);
    setEleccionComputadora(eleccionComputadora);
    if (eleccion === 'piedra' && eleccionComputadora === 'tijera') {
      setPuntosUsuario(puntosUsuario + 1);
      setMensaje('¡Ganaste un punto!');
    } else if (eleccion === 'tijera' && eleccionComputadora === 'papel') {
      setPuntosUsuario(puntosUsuario + 1);
      setMensaje('¡Ganaste un punto!');
    } else if (eleccion === 'papel' && eleccionComputadora === 'piedra') {
      setPuntosUsuario(puntosUsuario + 1);
      setMensaje('¡Ganaste un punto!');
    } else if (eleccion === eleccionComputadora) {
      setMensaje('¡Empate!');
    } else {
      setPuntosComputadora(puntosComputadora + 1);
      setMensaje('¡La computadora ganó un punto!');
    }
  };

  const reiniciarJuego = () => {
    setPuntosUsuario(0);
    setPuntosComputadora(0);
    setEleccionUsuario(null);
    setEleccionComputadora(null);
    setMensaje('');
  };

  return (
    <div className="App">
      <header>
        <h1>Piedra, Papel o Tijera</h1>
        <p>El primero en sacar 5 puntos, gana la partida</p>
      </header>
      <main>
      
        <div className="marcador">
          <p className="nombre nombre-jugador" id="nombre-jugador">
            {nombreJugador}
          </p>
          <button className="btn" id="cambiar-nombre" onClick={cambiarNombre}>
            Cambiar nombre
          </button>
          <p className="nombre nombre-computadora">Computadora</p>
          <p className="puntos">
            <span id="puntos-usuario">{puntosUsuario}</span>
            <span>-</span>
            <span id="puntos-computadora">{puntosComputadora}</span>
          </p>
        </div>
        <div className="elegi-tu-arma" id="elegi-tu-arma">
          <h2>Elegí tu juego para el próximo turno</h2>
          <div className="armas">
            {opciones.map((opcion) => (
              <button className="arma" key={opcion} onClick={() => jugar(opcion)}>
                {opcion.charAt(0).toUpperCase() + opcion.slice(1)}
                <img
                  src={
                    opcion === 'piedra'
                      ? '/imagenes/piedra.png'
                      : opcion === 'papel'
                      ? '/imagenes/papel.png'
                      : '/imagenes/tijera.png'
                  }
                  alt={opcion.charAt(0).toUpperCase() + opcion.slice(1)}
                />
              </button>
            ))}
          </div>
        </div>
        <div className={`mensaje ${mensaje ? '' : 'disabled'}`} id="mensaje">
          {mensaje && (
            <p>
              Usaste <span className="eleccion">{eleccionUsuario}</span>
              <br />
              y la computadora usó <span className="eleccion">{eleccionComputadora}</span>
            </p>
          )}
          <p id="gana-punto">{mensaje}</p>
        </div>
        <button className="btn" id="reiniciar" onClick={reiniciarJuego}>
          Reiniciar juego
        </button>
      </main>
    </div>
  );
}

export default App;
