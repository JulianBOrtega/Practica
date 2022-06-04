const fs = require("fs");
const armas = JSON.parse(fs.readFileSync("./armas.json", "utf-8"));
const enemigos = JSON.parse(fs.readFileSync("./enemigos.json", "utf-8"));
const Jugador = require("./jugador.js");

function ObjMapa(pos, obj, tipo)
{
    this.posicion = pos;
    this.objeto = obj;
    this.tipo = tipo;
}

function sumarPosicion(pos1, pos2)
{
    return pos1.map((n, i) => n + pos2[i]);
}

const nivel = {
    mapa: require("./mapa.js"),
    contenido: [],
    iconoJugador: "♚",
    generarNivel: function(iconoJugador)
    {
        this.mapa.generarCeldas();
        
        if(iconoJugador)
        {
            this.agregarJugador(iconoJugador);
        }
        else
        {
            this.agregarJugador(this.iconoJugador);
        }

        nivel.agregarEnemigo(enemigos[0], [5, 2]);
        nivel.agregarArma(armas[0], [0, 1]);

        return this.mapa;
    },
    agregarJugador: function(icono)
    {
        if(this.contenido.length !== 0) //! No queremos más de un solo jugador
        {
            return;
        }

        const jugador = new Jugador(100, null, 300, [], [0, 2]);
        this.mapa.editarCelda(jugador.posInicial, icono);
        const obj = new ObjMapa(jugador.posInicial, jugador, "jugador");
        this.contenido.push(obj);

        return obj;
    },
    agregarEnemigo: function(enemigo, posicion)
    {
        this.mapa.editarCelda(posicion, enemigo.icono);
        const obj = new ObjMapa(posicion, enemigo, "enemigo");
        this.contenido.push(obj);

        return obj;
    },
    agregarArma: function(arma, posicion)
    {
        this.mapa.editarCelda(posicion, arma.icono);
        const obj = new ObjMapa(posicion, arma, "arma");
        this.contenido.push(obj);

        return obj;
    },
    agregarItem: function(item, posicion)
    {
        this.mapa.editarCelda(posicion, arma.icono);
        const obj = new ObjMapa(posicion, item, "item");
        this.contenido.push(obj);

        return obj;
    },
    obtenerObj: function(posicion)
    {
        return this.contenido.find((obj) => obj.posicion === posicion);
    },
    moverJugador: function(direccion)
    {
        let dir = []
        switch (direccion) {
            case "abajo":
                dir = [0, -1];
                break;
            case "arriba":
                dir = [0, 1];
                break
            case "izquierda":
                dir = [-1, 0];
                break;
            case "derecha":
                dir = [1, 0];
                break;
            default:
                console.log("dirección incorrecta.");
                return;
        }

        const posDestino = sumarPos(contenido[0].posicion, dir);
        const objDestino = this.obtenerObj(posDestino);
        if(objDestino) //! Si hay un objeto en la posición de destino
        {
            if(!contenido[0].interactuar(objDestino))
            {
                return false;
            }
        }

        this.mapa.moverCelda(contenido[0].posicion, posDestino);
        contenido[0].posicion = posDestino;
        return true;
    }
}

module.exports = nivel;