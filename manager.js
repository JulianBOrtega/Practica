const nivel = {
    mapa: require("./mapa.js"),
    dificultad: 2,
    enemigos: [],
    generarNivel: function()
    {
        return this.mapa.generarCeldas();
    },
    agregarEnemigo: function(enemigo, posicion)
    {
        this.mapa.editarCelda(posicion, enemigo.icono);
        enemigo.posicion = posicion;
        this.enemigos.push(enemigo);
    }
}

module.exports = nivel;