function FizzBazz(a){
    if(a%3 == 0 ){
        if(a%5 == 0){
            return "FizzBuzz"
        } else {
            return "Fizz"
        }
    } else {
        if(a%5 == 0){
            return "Buzz"
        }
    }
}