function FizzBazz(a) {
    if (a % 3 == 0 && a % 5 == 0) {
        return "FizzBuzz"
    }
    if (a % 5 == 0) {
        return "Buzz"
    }
    if (a % 3 == 0) {
        return "Fizz"
    }
}

function anioBisiesto(a){ 
    if (a % 4 == 0 && a % 400 == 0) {
        return true
    }
    return false
}