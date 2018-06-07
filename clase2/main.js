function cambiarElColor(color) {
    const titulo = document.getElementById('titulo'); // guardo en una variable el h1 
    titulo.style.color = color;  //con esto cambio el color de texto
}

function cambiarElTamanio(numero) {
    const titulo = document.getElementById('titulo');
    titulo.style.fontSize = numero.currentTarget.value + "px"; //cambiar el tamaño del texto
}

function cambiarLaAlineacion(alinenacion) {
    const titulo = document.getElementById('titulo');
    titulo.style.textAlign = alinenacion; //cambiar la alineacion del texto
}

function cambiarElTexto(texto) {
    const titulo = document.getElementById('titulo');
    titulo.innerHTML = texto.currentTarget.value;
}

function iniciar() {
    const cajaDeTexto = document.getElementById('cajaDeTexto');
    // cajaDeTexto.addEventListener('input',cambiarElTexto);
    cajaDeTexto.addEventListener('input', cambiarElTamanio);
}

window.onload = iniciar;