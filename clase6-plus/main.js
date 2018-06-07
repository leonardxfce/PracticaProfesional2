function iniciar() {
    const cajaDeTexto = document.getElementById('texto');
    const logica = new logicaDeEstilos();
    cajaDeTexto.addEventListener('change',logica.cambiarColorDeLetra);
    cajaDeTexto.addEventListener('change',logica.cambiarTitulo);
    alertar();
}

window.onload = iniciar;