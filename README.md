# Práctica
Este es un proyecto para poner en práctica Git, trello y el trabajo grupal. 

### Archivos
A continuación se presentan los archivos que debe incluir el programa y la funcionalidad que se espera de ellos.
- app.js
- jugador.js
- manager.js
- armas.json
- enemigos.json
- partida.json

#### app.js
Es el punto de inicio del programa. Aquí controlaremos el flujo del mismo además es el lugar usualmente llamaremos a las demás funciones para hacer funcionar el juego.

#### jugador.js
Debe contener todas las variables y funciones que tienen que ver con el jugador, tales como:
- hp (puntos de vida)
- dinero
- inventario
- posicion

#### manager.js
Contiene variables y funciones varias que nos permite tener siento control sobre el nivel, tal como:
- dificultad
- enemigos
- generarNivel()
- moverCelda()
- intercambiarCelda()
- agregarEnemigo()
- agregarArma()
- daniarEntidad()

#### armas.json
Es un array de objetos en formato json, que contiene una lista de armas disponibles para usar en el juego. Cada arma debe tener:
- nombre (Ejemplo: "ak-47". No debe contener espacios)
- puntosDeAtaque (El daño que causa a un jugador o enemigo. Ejemplo: 20)
- alcance (Cuantas celdas de distancia puede causar daño. Ejemplo: 3 )
- precio (cuánto cuesta comprar esa arma. Ejemplo: 250000)
- descripcion (Una breve descripción sobre el arma y cómo la diferencia de las demás)

#### enemigos.json
Es un array de objetos en formato json, que contiene una lista de enemigos para usar en el juego. Cada enemigo debe tener:
- nombre (Ejemplo: "Rata")
- hp (Puntos de vida. Ejemplo: 50)
- arma (Ejemplo: "ak-47")
- loot (Dinero que suelta al morir. Ejemplo: 200)
- posicion (Siempre vacío. Su valor sera asignado durante el juego.)

#### partida.json
Contiene información de la partida actual. Debe ser editada y cambiada solamente desde código.
