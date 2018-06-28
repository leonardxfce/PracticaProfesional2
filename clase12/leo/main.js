function comprobarStock(cantidad) {
	if (cantidad == 0) {
		return "No hay Stock";
	}
	if (cantidad < 6) {
		return "El Stock es bajo";
	} else {
		return "El Stock es alto";
	}
}