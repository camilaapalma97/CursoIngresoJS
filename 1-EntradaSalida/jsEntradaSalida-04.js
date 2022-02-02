/* Palma Camila
e/s 04
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
revisar id siempre
*/
function mostrar()
{
	//declaro la variable
	let nombreIngresado;
	
	//pido el nombre por prompt
	nombreIngresado = prompt("ingrese su nombre");

	
	document.getElementById('txtIdNombre').value = nombreIngresado;


	//forma
	//alert("su nombre es: "+nombreIngresado);



}