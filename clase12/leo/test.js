function probarDevolverBajoStock(assert) {
    let resultado = comprobarStock(5);
    assert.equal(resultado, "El Stock es bajo");
    resultado = comprobarStock(1);
    assert.equal(resultado, "El Stock es bajo");
}

function probarDevolverAltoStock(assert) {
    const resultado = comprobarStock(10);
    assert.equal(resultado, "El Stock es alto");
}

function probarDevuelveSinStock(assert) {
    const resultado = comprobarStock(0);
    assert.equal(resultado, "No hay Stock");
}

QUnit.test("Devuelve 'Bajo' cuando la cantidad de menor a 5", probarDevolverBajoStock);
QUnit.test("Devuelve 'Alto' cuando la cantidad es igual a 10", probarDevolverAltoStock);
QUnit.test("Devuelve 'Sin Stock' cuando la cantidad es 0", probarDevuelveSinStock);