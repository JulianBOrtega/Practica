const nivel = {
    mapa: require("./mapa.js"),
    dificultad: 2,
    enemigos: [],
    generarNivel: function()
    {
        return this.mapa.generarCeldas();
    },

}

module.exports = nivel;