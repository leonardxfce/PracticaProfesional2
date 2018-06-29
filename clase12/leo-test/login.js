// con esta linea le decimos que funcion 
// debe ejecutar al cargar (load) la pagina
window.onload = incio;

// "equivalente" a public static void main
function incio() {
    const carta = new jQuery(".card");
    carta.slideDown();
}