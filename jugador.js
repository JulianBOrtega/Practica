function Jugador(hpInicial, armaInicial, dineroInicial, inventarioInicial, posInicial)
{
    this.hp = hpInicial;
    this.arma = armaInicial;
    this.dineroInicial = dineroInicial;
    this.inventarioInicial = inventarioInicial;
    this.posInicial = posInicial;

    this.recibirDaño = function(daño)
    {
        this.hp -= daño;

        if (this.hp <= 0) 
        {
            this.hp = 0;
            return "GAME OVER";
        }
    }
    
    this.interactuar = function(obj)
    {
        switch (obj.tipo) {
            case "enemigo":
                console.log("Interacción para item no implementada.");
                break;
            case "arma":
                console.log("Interacción para item no implementada.");
                break;
            case "item":
                console.log("Interacción para item no implementada.");
                break;
            default:
                console.log("No existe caso de interacción para " + obj.tipo);
                break;
        }

        return true;
    }
}

module.exports = Jugador;