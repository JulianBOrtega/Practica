console.clear();
const nivel = require("./manager.js");

nivel.generarNivel();
nivel.mapa.editarCelda([0, 2], "*");

console.log(nivel.mapa.celdas);