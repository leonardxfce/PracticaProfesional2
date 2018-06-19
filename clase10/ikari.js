function esconder() {
		//alert("asdasd")
		$("h1").slideToggle();
		$("b").slideToggle();
		$("hr").slideToggle();
		/* Act on the event */
	};
	function incio() {
	$("h1").html("ikari");
	$("h1").after('<b> 31 </b>');
	$("h1").after("<hr>")
	$("h1").after('<button>Apriete aqui</button>');
	$("body").on('click','button', esconder)
	
};
$(document).ready(incio);