class logicaDeEstilos {

    constructor() {
        this.cambiarTitulo = this.cambiarTitulo.bind(this);
        this.cambiarDeColor = this.cambiarDeColor.bind(this);
        this.cambiarColorDeLetra = this.cambiarColorDeLetra.bind(this);
    };
    
    cambiarTitulo(elemento) {
        const titulo = document.getElementById('titulo');
        titulo.innerHTML = "Hola " + elemento.currentTarget.value;
    };

    cambiarDeColor(elemento) {
        const parteCentral = document.getElementById('center');
        parteCentral.style.backgroundColor = elemento.currentTarget.value;
    };

    cambiarColorDeLetra(elemento) {
        const titulo = document.getElementById('titulo');
        titulo.style.color = elemento.currentTarget.value;
    };
}