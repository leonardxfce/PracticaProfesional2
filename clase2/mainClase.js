class Cambiador {
    constructor() {
        this.titulo = document.getElementById('titulo'); // guardo en una variable el h1 
        this.cajaDeTexto = document.getElementById('cajaDeTexto');
        this.cajaDeTexto.addEventListener('input', this.cambiarElTamanio);
    }
    cambiarElColor(color) {
        this.titulo.style.color = color; //con esto cambio el color de texto
    }

    cambiarElTamanio(numero) {
        this.titulo.style.fontSize = numero.currentTarget.value + "px"; //cambiar el tamaño del texto
    }

    cambiarLaAlineacion(alinenacion) {
        this.titulo.style.textAlign = alinenacion; //cambiar la alineacion del texto
    }

    cambiarElTexto(texto) {
        this.titulo.innerHTML = texto.currentTarget.value;
    }

}
window.onload = new Cambiador();