// con esta linea le decimos que funcion 
// debe ejecutar al cargar (load) la pagina
window.onload = incio; 

// "equivalente" a public static void main
function incio() {
    $(".card").slideDown();
    $("button").on("click",consulta);

}
function consulta(){
    var x= $("#usuario").val();
    var b= $("#password").val();
   // $(`.yamila`).remove();
    if (x==="admin"&&b==="1234"){
        // alert ("CORRECTO");
        var c= `
        <div class="row yamila" >
            <div class="col">
                <div class="alert alert-primary" role="alert">
                A simple primary alert—check it out!
                 </div>
            </div>
        </div>
        `;
        $(c).appendTo(".container");

    }
    else {
        // alert("ESTA MUY MAL");
        var d= `
        <div class="row yamila" >
            <div class="col">
                <div class="alert alert-" role="alert">
                A simple primary alert—check it out!
                 </div>
            </div>
        </div>
        `;
        $(d).appendTo(".container");
    }
    var c= ``

}