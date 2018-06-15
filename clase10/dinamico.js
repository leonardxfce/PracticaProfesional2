var color = "danger";
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
const cargarBotones = function () {
    $('#contenido').append(badge);
    $('#contenido').append(alert);
    $('#contenido').append(boton); 
}

$(document).ready(cargarBotones);
