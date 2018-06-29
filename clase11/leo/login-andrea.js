// con esta linea le decimos que funcion 
// debe ejecutar al cargar (load) la pagina
window.onload = incio; 

// "equivalente" a public static void main
function incio() {
    $(".card").slideDown();
    $("button").on("click",condicion);
}
function condicion(){
    const user = $("#usuario").val();
    const contra = $("#password").val();
    const mal = `
        <div class="alert alert-danger" role="alert">
            Contraseña o Usuario Incorrecto :(
        </div>
    `;
    const bien =`
        <div class="alert alert-success" role="alert">
            Contraseña y Usuario Correctos :)
        </div>
    `
    $(".alert").remove();
    if((contra==="1234") && (user ==="admin")){
        $(bien).appendTo(".nuevo");
    }else{
        $(mal).appendTo(".nuevo");
    }
    /*
    if((contra==="1234") && (user ==="admin")){
        alert("Contraseña y Usuario Correctos :)");
    }else{
        alert("Contraseña o Usuario Incorrecto :(");
    }*/
}