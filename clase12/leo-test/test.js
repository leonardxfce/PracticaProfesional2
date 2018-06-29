function probarPrimerPokemon(assert) {
    var done = assert.async();
    $("input").val(1);
    $("input").trigger("search");
    const fe = function () {
        const cantidad = $(".card").length;
        assert.equal(cantidad,1);
        done();
    };
    setTimeout(fe,1000);
}

QUnit.test("muestra un pokemon", probarPrimerPokemon);