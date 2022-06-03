console.clear();
const fs = require("fs");
const nivel = require("./manager.js");
const armas = JSON.parse(fs.readFileSync("./armas.json", "utf-8"));
const enemigos = JSON.parse(fs.readFileSync("./enemigos.json", "utf-8"));

nivel.generarNivel();
nivel.mapa.editarCelda([0, 2], "*");
nivel.agregarEnemigo(enemigos[0], [5, 2]);

console.log(nivel.mapa.celdas);