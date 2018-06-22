const agregrarItem = function () {
    const valor = $("#cajaDeTexto").val();
    const html = `<li class='list-group-item'>${valor}</li>`;
    $("#listado").append(html);
    $("#cajaDeTexto").focus().val('');
};
const quitarItem = e => $(e.currentTarget)
    .addClass("list-group-item-danger")
    .fadeOut();

$("#botoncito").on('click', agregrarItem);
$('.list-group').on('click', '.list-group-item', quitarItem);