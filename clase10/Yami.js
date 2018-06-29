function esconder(){
    $("h1").slideToggle();
    $("hr").slideToggle();
    $("b").slideToggle();
}

$(document).ready(esconder(){
    $("h1").html ("Yamila Fuentes");
    $ ("h1"). after("<b>21</b>");
    $ ("h1").after("<hr>")
    $ ("h1"). after("<button>Click</button>");
    $ ("body").on('click',"button", esconder)
});