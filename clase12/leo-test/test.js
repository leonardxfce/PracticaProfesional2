function probarPrimerPokemon(assert) {
    const done = assert.async();
    const input = new jQuery("input");
    input.val(1);
    input.trigger("search");
    const comprobarDiv = function () {
        const carta = new jQuery(".card");
        const cantidad = carta.length;
        assert.equal(cantidad, 1);
        done();
    };
    setTimeout(comprobarDiv, 2000);
}

QUnit.test("muestra un pokemon", probarPrimerPokemon);