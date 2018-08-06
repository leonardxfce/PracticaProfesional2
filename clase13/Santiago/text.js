function probarFizz(assert) {
    var resultado = FizzBazz(3)
    assert.equal("Fizz", resultado);
    resultado = FizzBazz(5)
    assert.equal("Buzz", resultado)
    resultado = FizzBazz(6)
    assert.equal("Fizz", resultado)
    resultado = FizzBazz(30)
    assert.equal("FizzBuzz", resultado)
    resultado = FizzBazz(35)
    assert.equal("Buzz", resultado)
    resultado = FizzBazz(15)
    assert.equal("FizzBuzz", resultado)
}

QUnit.test("probando fizzBuzz", probarFizz);

function probarAnioBisiesto(assert) {
    var resultado = anioBisiesto(1998)
    assert.equal(false, resultado)
    resultado = anioBisiesto(2000)
    assert.equal(true, resultado)
    resultado = anioBisiesto(218)
    assert.equal(false, resultado)
    resultado = anioBisiesto(1999)
    assert.equal(false, resultado)
}
QUnit.test("probando anioBisiesto", probarAnioBisiesto);