function probarSuma(assert) {
    var resultado = sumar(2, 2);
    assert.equal(4, resultado);
    resultado = sumar(1, 1);
    assert.equal(2, resultado);
    resultado = sumar(10, -10);
    assert.equal(0, resultado);
    resultado = sumar(4, 5);
    assert.equal(9, resultado);
}

QUnit.test("probando funcion SUMAR", probarSuma);

function probarResta(assert) {
    var resultado = restar(5, 2);
    assert.equal(3, resultado);
    resultado = restar(3, 1);
    assert.equal(2, resultado);
    resultado = restar(6, 6);
    assert.equal(0, resultado);
    resultado = restar(-4, -2);
    assert.equal(-2, resultado);
}
QUnit.test("probando funcion restar", probarResta);

function probarNumerosPrimos(assert) {
    var resultado = numerosPrimos(1);
    assert.ok(resultado);
    resultado = numerosPrimos(6);
    assert.notOk(resultado);
    resultado = numerosPrimos(7);
    assert.ok(resultado);
    resultado = numerosPrimos(8);
    assert.notOk(resultado);
}
QUnit.test("probando primos ", probarNumerosPrimos);

function contarVocales(assert) {
    var resultado = vocales("yamila");
    assert.equal(resultado, 3);
    resultado = vocales("leonardo");
    assert.equal(resultado, 4);
    resultado = vocales("santiago");
    assert.equal(resultado, 4);
    resultado = vocales("lisa");
    assert.equal(resultado, 2);
}
QUnit.test("probando vocales ", contarVocales);


