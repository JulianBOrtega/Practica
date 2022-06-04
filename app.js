console.clear();
const fs = require("fs");
const partida = JSON.parse(fs.readFileSync("./partida.json", "utf-8"));

let nivel = require("./manager.js");
nivel.generarNivel();

if(partida && partida != [] && partida != "") //* Cargar partida si existe
{
    nivel.mapa.celdas = partida.celdas;
    nivel.contenido = partida.contenido;
    nivel.iconoJugador = partida.iconoJugador;   
}

//////////////////////////////////////////////////////




console.log(nivel.mapa.celdas);




//////////////////////////////////////////////////////

//! Guarda el estado de la partida
function PartidaGuardada(nivel)
{
    this.celdas = nivel.mapa.celdas;
    this.contenido = nivel.contenido;
    this.iconoJugador = nivel.iconoJugador;
}

fs.writeFileSync("./partida.json", JSON.stringify(new PartidaGuardada(nivel)), "utf-8");

//! Borra la partida
//fs.writeFileSync("./partida.json", "[]", "utf-8");