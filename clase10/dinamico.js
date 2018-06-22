var color = "primary";
const cargarBotones = function (e) {
    var color = e.currentTarget.value;
    const boton = `
    <button class="btn btn-${color}">
        Boton Dinamico
    </button>
`;

    const alert = `
    <div class="alert alert-${color}">
        Soy una alerta
    </div>
`;

    const badge = `
    <h1 class="display-1">
        Soy un <span class="badge badge-${color}">Texto</span>
    <h1>
`;
    $('#contenido').append(badge);
    $('#contenido').append(alert);
    $('#contenido').append(boton);
}
$("colores").on("input", cargarBotones);
/*$(document).ready(cargarBotones);*/
