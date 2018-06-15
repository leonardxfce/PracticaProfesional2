const cajaDeTexto = document.getElementById('cajaDeTexto');
const boton = document.getElementById('botoncito');
const listado = document.getElementsByClassName('list-group');
const agregarItem = function () {
    const html = `<li class='list-group-item'>${cajaDeTexto.value}</li>`;
    listado[listado.length - 1].innerHTML += html;
    cajaDeTexto.value = null;
    cajaDeTexto.focus();
}
boton.addEventListener('click', agregarItem);