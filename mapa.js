const filaTop = " _____ ";
const filaMiddle = "|     |";
const filaBottom = "|_____|";
const tamanio = [10, 5];

function obtenerIndex(posicion)
{
    return 145 + filaMiddle.length * posicion[0] + 28.4 * tamanio[0] * posicion[1];
}

const mapa =
{
    celdas: "",
    generarCeldas: function()
    {
        for (let i = 0; i < tamanio[1]; i++) 
        {
            this.celdas += `${filaTop.repeat(tamanio[0])}\n${filaMiddle.repeat(tamanio[0])}\n${filaMiddle.repeat(tamanio[0])}\n${filaBottom.repeat(tamanio[0])}\n`;
        }

        return this.celdas;
    },
    editarCelda: function(posicion, contenido)
    {
        const index = obtenerIndex(posicion);

        if(contenido)
        {
            this.celdas = this.celdas.substring(0, index) + contenido + this.celdas.substring(index + 1);
        }
        else if(this.celdas[index] != " ")
        {
            this.celdas = this.celdas.substring(0, index) + " " + this.celdas.substring(index + 1);
        }
    
        return index;
    },
    moverCelda: function(posInicial, posFinal)
    {
        const contenido = this.celdas[obtenerIndex(posInicial)];
        this.editarCelda(posInicial);
        this.editarCelda(posFinal, contenido);

        return posFinal;
    },
    intercambiarCelda: function(celda1, celda2)
    {
        const contenido = [this.celdas[obtenerIndex(celda1)], this.celdas[obtenerIndex(celda2)]];
        this.editarCelda(celda1, contenido[1]);
        this.editarCelda(celda2, contenido[0]);

        return;
    }
}

module.exports = mapa;