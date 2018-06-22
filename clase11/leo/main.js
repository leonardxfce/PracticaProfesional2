function crearCartaPokemon(e) {
    const html = `
        <div class="col-2">
            <div class="card">
                <img class="card-img-top" src="${e.sprites.front_default}" alt="">
                <div class="card-body text-center">
                    <h4 class="card-title">${e.pokemon.name}</h4>
                </div>
            </div>
        </div>
        `;
    $(html)
        .hide()
        .appendTo("#galeria")
        .fadeIn();
}

function notificarError() {
    const html = `
    <div class="invalid-feedback">
        Pokemon no existente o error de Red
    </div>
    `;
    $("input")
        .addClass("is-invalid")
        .after(html);
    setTimeout(quitarError, 2000);
}

function quitarError() {
    $("input").removeClass("is-invalid");
    $(".invalid-feedback").remove();

}

function buscarPokemon() {
    const nombre = $("input").val();
    const config = {
        type: "get",
        url: `https://pokeapi.co/api/v2/pokemon-form/${nombre}/`,
    };
    $.ajax(config)
        .done(crearCartaPokemon)
        .fail(notificarError);
    $("input")
        .val(null)
        .focus();
}

function iniciar() {
    $("input").on("search", buscarPokemon);
}

$(iniciar);