/*Palma Camila
e/s 05
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{		
	//declaro la variable
	let nombreIngresado;
	let edadIngresada;


	
	nombreIngresado = document.getElementById('txtIdNombre').value;

	edadIngresada = document.getElementById('txtIdEdad').value;


	//"Usted se llama José y tiene 66 años"
	alert("Usted se llama "+nombreIngresado+" y tiene "+edadIngresada+" años");

}

	//txtIdNombre
	//txtIdEdad