function probarFizz(assert){
    var resultado = FizzBazz (3)
    assert.equal("Fizz", resultado);
    resultado = FizzBazz (5)
    assert.equal("Buzz", resultado)
    resultado = FizzBazz (6)
    assert.equal("Fizz", resultado)
    resultado = FizzBazz (30)
    assert.equal("FizzBuzz", resultado)
    resultado = FizzBazz (35)
    assert.equal("Buzz", resultado)
    resultado = FizzBazz (15)
    assert.equal("FizzBuzz", resultado)
}

QUnit.test("probando fizzBuzz",probarFizz);