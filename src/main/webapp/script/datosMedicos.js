//Creamos los datos básicos principales previos para las citas médicas, los médicos y en número de sala:
var medicos = ["Jose Vázquez", "Ana Maria Rosado", "Antonio banderas", "Rocio Figueroah", "Natasha Radienokva"];
var salas = ["2", "16", "4", "8", "13"];

//Una alerta por si el dni escrito no coincide con uno ya registrado:
var errorDNI = "Vaya, el dni indicado no coincide con ninguno de los registrados anteriormente :/";


//Se crea la clase paciente:
class paciente
{
	constructor(nombre,apellido,dni,edad,tlf,fechaDeNacimiento)
	{
	this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.edad = edad;
    this.tlf = tlf;
    this.fechaDeNacimiento = fechaDeNacimiento;
 	}
 }
 
 //Se crea la clase de citas médicas:
 class citaMedica
{
	constructor(pacienteDNI,salaCita,hora,dia,motivoConsulta,medico)
	{
	this.pacienteDNI = pacienteDNI;
    this.salaCita = salaCita;
    this.hora = hora;
    this.dia = dia;
    this.motivoConsulta = motivoConsulta;
    this.medico = medico;
 	}
 }
 
 
//Se realiza la funcion que realizara nuestra aplicacion en el entorno de usuarios:
class ImplementacionUsuario
{
	//Metodo para añadir los usuarios:
	addPaciente(bd)
	{
		//Pedimos los datos:
		var nombre=prompt("Introduzca su nombre:");
		var apellido=prompt("Introduzca sus apellidos:");
		var tlf=Number(prompt("Introduzca su número de teléfono:"));
		var dni=prompt("Introduzca su DNI/NIE:");
		var edad=prompt("Indique su edad:");
		var fechaDeNacimiento=prompt("Introduzca su fecha de nacimiento:", "día-mes-año");
	
		//Se guardan los datos:
		var alumno= new paciente(nombre,apellido,dni,edad,tlf,fechaDeNacimiento);
		
		//Se añade el usuario a la lista:
		bd.push(alumno);
		return bd;
	}
	
	
	//Metodo para borrar los usuarios:
	borrarUsuario(bd)
	{
		//Pedimos una id:
		var dniBorrar=prompt("Introduzca su DNI para borrar sus datos:");
		
		//Borramos el dni indicado.
		for (var i = 0; i < bd.length(); i ++){
				if(bd[i].dni() == dniBorrar)
					bd.splice(i, 1);
		}			
		return bd;
	}
	
	
	//Método para enseñar los usuarios:
	mostrarUsuario(bd)
	{
		//Pedimos dni del usuario:
		var dniPaciente=prompt("Introduzca su DNI:");
		
		//Lo mostramos:
		for (var i = 0; i < bd.length(); i ++){
				if(bd[i].dni() == dniPaciente) 
					document.write(bd[i]);
		}			
		return bd;
	}
}
//*No se la razón exacta. Pero, a la hora de poner un controlador para saber cuando da error en ambos métodos de arriba al no reconocer el dni, da error en varios puntos del código.*



//Se realiza la funcion que realizara nuestra aplicacion en el entorno de citas médicas:
class ImplementacionCitas
{
	//Metodo para crear una cita:
	crearCitas(bd2, bd)
	{
		//Pedimos los datos:
		var pacienteDNI=prompt("Introduzca su DNI del paciente:");
		for (var i = 0; i < bd.length(); i ++){
			
			//Por si diera error buscando el dni:
			if(bd[i].dni() != pacienteDNI)
			document.write(errorDNI);
			else {
				var dia=prompt("¿Qué día desea la cita?:");
				var mes=prompt("¿Qué mes desea la cita?:");
				
				//Se guarda la fecha en formato date:
				var fechaCita = new Date(mes + " " + dia + "," + "2023");
				
				var hora=Number(prompt("¿Qué hora desea la cita?:"));
				var motivoConsulta=prompt("Indique el motivo de su consulta:");
				
				//Se genera un número aleatorio tanto para el médico como para su respectiva sala:
				var numAleatorio = Math.floor((Math.random() * (4 - 0 + 1)) + 0);
				var medico = medicos[numAleatorio];
				var sala = salas[numAleatorio];
				i = bd.length();
		}
	}
		//Se guardan los datos:
		var cita = new citaMedica(pacienteDNI,sala,hora,fechaCita,motivoConsulta,medico);
		
		//Se añade la cita:
		bd2.push(cita);
		return bd2;
	}
	
	
	//Metodo para mostrar las citas creadas:
	mostrarCitas(bd2)
	{
		//pedimos una id:
		var dniPaciente=prompt("Introduzca su DNI para mostrar sus citas:");
		
		//Se busca el dni correspondiente y se muestra por pantalla los datos de la cita:
		for (var i = 0; i < bd2.length(); i ++){
				if(b2[i].dni() == dniPaciente) 
					document.write(bd2[i]);
		}			
		return b2;
	}
}

	
	//Las funciones que llaman a los diferentes métodos:
	function crearUsuario(){
		ImplementacionUsuario.addPaciente(paciente);
	}
	
	function borrarUsuario(){
		ImplementacionUsuario.borrarUsuario(paciente);
	}
	
	function consultarUsuario(){
		ImplementacionUsuario.mostrarUsuario(paciente);
	}
	
	
	function generarCita(){
		ImplementacionCitas.crearCitas(citaMedica, paciente);
	}
	
	function datosCita(){
		ImplementacionCitas.mostrarCitas(citaMedica);
	}