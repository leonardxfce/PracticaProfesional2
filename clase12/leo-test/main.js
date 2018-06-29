window.onload = iniciar;

function iniciar() {
    const contenedor = new jQuery(".container");
    contenedor.on("search", "input", buscarPokemon);
    contenedor.on("click", ".col-2", borrarPokemon);
}

function buscarPokemon() {
    const input = new jQuery("input");
    const nombreEscrito = input.val();
    const configuracion = {
        type: "get",
        url: `https://pokeapi.co/api/v2/pokemon-form/${nombreEscrito}/`,
    };
    const request = jQuery.ajax(configuracion);
    request.done(crearPokemon);
    request.fail(mostrarFallo);
    input.val(null);
    input.focus();
}

function crearPokemon(response) {
    const URLdeLaImagen = response.sprites.front_default;
    const nombreDelPokemon = response.pokemon.name;
    const html = `
        <div class="col-2">
            <div class="card">
                <img class="card-img-top" src="${URLdeLaImagen}" >
                <div class="card-body text-center">
                    <h4 class="card-title">${nombreDelPokemon}</h4>
                </div>
            </div>
        </div>
    `;
    const nuevoDiv = new jQuery(html);
    nuevoDiv.appendTo("#galeria");
}

function mostrarFallo() {
    alert("Ese pokemon no existe o no hay Internet");
}

function borrarPokemon(evento) {
    const elementoClicleado = evento.currentTarget;
    const item = new jQuery(elementoClicleado);
    item.remove();
}