function iniciar() {
    alert(' Feliz Cumpleaños Lautaro :) ');
}

const otroIniciar = function () {
    alert(' Hola don pepito, hola don jose');
}

const iniciar2 = function () {
    const x = document.getElementById('boton');
    /*
     x.style.fontSize = "100px"; 
    */
    //const saludo = "Feliz Cumpleaños a MI";
    x.addEventListener('click', capturarLoQueEscribeElUsuario);
    // x.addEventListener('mouseover',saludo); 
}

const funcioncita = function () {
    const saludito = 'Feliz Cumpleaños ALDO';
    const elTitulo = document.getElementById('titulo');
    elTitulo.innerHTML = saludito;
}



const capturarLoQueEscribeElUsuario = function () {
    const cosito = document.getElementById('cositoParaEscribir');
    const valorQueEscrbioElUsuario = cosito.value;
    const elTitulo = document.getElementById('titulo');
    elTitulo.innerHTML = valorQueEscrbioElUsuario;
};

const laFuncionNueva = function (elemento) {
    const loQueEstaEscribiendoElUsuario = elemento.currentTarget.value;
    const elTitulo = document.getElementById('titulo');
    elTitulo.innerHTML = loQueEstaEscribiendoElUsuario;
    elTitulo.style.color = loQueEstaEscribiendoElUsuario;
};

const iniciar3 = function () {
    const cositoParaEscribir = document.getElementById('cositoParaEscribir');
    cositoParaEscribir.addEventListener('input', laFuncionNueva);
}

window.onload = iniciar3;