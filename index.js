var miObjeto= document.getElementById("t")
var t= JSON.stringify(miObjeto.innerHTML)
var cantidadCaracteres= t.length

var contador= function(texto){
	var total = 0
	for (var i = 0; i < cantidadCaracteres-1; i++) {
		if(texto[i]==="." || texto [i]=== " "){
			total ++	
		}
	}
	return total
}

var CantidadEspaciosPuntos = contador(t)

var Convertidor = function(texto){

		for (var i = 0; i < cantidadCaracteres-1; i++) {
		if(texto[i]==="."){
			var mayuscula= texto[i+1].toUpperCase()
			texto= texto.substring(0, i+1)+ " " + mayuscula + texto.substring(i+2,texto.length-1)
			}
		}
	return texto
}

var texto2= Convertidor(t)

var cantidadLetras= t.length - CantidadEspaciosPuntos





var itemLista = document.createElement("li")
var contenido = document.createTextNode("Esta es la cantidad de caracteres "+ cantidadCaracteres)
itemLista.appendChild(contenido)
document.getElementById("resultados").appendChild(itemLista)

var itemLista2 = document.createElement("li")
var contenido2 = document.createTextNode("Esta es la cantidad de espacios y puntos "+ CantidadEspaciosPuntos)
itemLista2.appendChild(contenido2)
document.getElementById("resultados").appendChild(itemLista2)

var itemLista3 = document.createElement("li")
var contenido3 = document.createTextNode("Esta es la cantidad de letras "+ cantidadLetras)
itemLista3.appendChild(contenido3)
document.getElementById("resultados").appendChild(itemLista3)

var parrafo = document.createElement("p")
var contenidoParrafo= document.createTextNode(texto2)
parrafo.appendChild(contenidoParrafo)
document.body.appendChild(parrafo)