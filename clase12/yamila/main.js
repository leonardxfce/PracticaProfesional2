function sumar(a,b){
    return a + b;
}
function restar(a,b){
    return a - b;
}

function numerosPrimos(numero){
    var resultado= true
    for (let index = 2; index < numero; index++) {
       if (numero%index==0) {
            resultado=false;
             
       }
      
        
    }
    return resultado;
}

function vocales(palabra){
    var cantidadDeLetras= palabra.length
    var contador= 0
    for (let index = 0; index < cantidadDeLetras; index++) {
        if (palabra[index]=="a") {
            contador++
            
        }
        if (palabra[index]=="e") {
            contador++
            
        }
        if (palabra[index]=="i") {
            contador++
            
        }
        if (palabra[index]=="o") {
            contador++
            
        }
        if (palabra[index]=="u") {
            contador++
            
        }
        
    }
    return contador


}