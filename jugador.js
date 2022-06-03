let hp = 100;
let dinero = 300;
let inventario = [];
let posicion = [0,1];

let recibirDaño = function(number) {
    hp -= number
    if (hp <= 0) {
        return "GAMEN OVER"
    }
}



module.exports = {recibirDaño};