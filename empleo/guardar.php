<html>
	<head>
		<title>Formulario De Contacto</title>
		<link rel="stylesheet" type="text/css" href="estilo.css">
	</head>
	<body>
		<div class="form1">
<?php
//Definimos nuestra conexion a la base de datos
	$db_host="localhost";
	$db_nombre="empleo";
	$db_usuario="root";
	$db_contra="root";
	
	
//conectamos Con el servidor
	$conectar=mysqli_connect($db_host,$db_usuario,$db_contra,$db_nombre);

	//definimos las variables

	$nombre=$_POST['nombre']; 
	$telefono=$_POST['telefono']; 
	$correo=$_POST['correo'];;
	$mensaje=$_POST['mensaje'];
	//metemos los datos al PHPMyAdmin
	$consulta="REPLACE INTO empleo VALUES(
								   '$nombre',
								   '$telefono',
								   '$correo',
								   '$mensaje')"
	or die ("Fallo en el insertado del usuario");

	$resultados=mysqli_query($conectar, $consulta);
	//verificamos la ejecucion
	echo "<h1>Datos introducidos correctamente por:</br> $nombre</h1>";
	echo "<h2>Gracias por dejar su solicitud de empleo ;)</h2>";
	
	//Cerramos la conexion
	mysqli_close($conectar);
	?>
				</form>
		</div>
	</body>
</html>