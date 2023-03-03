# API NEOCREDTIO

la funcion de este readmi , es dar explicacion para el despliegue local de la API realizada para el backend del proyecto neoprestamos.

## APLICACIONES REQUERIDAS

Para el despliegue es requerido descargar :

```
* Node.js v17.8.0
* DB (MongoDB version v5.0.9)
* Visual Studio Code 
* Git
```

## EXPLICACION PARA EL DESPLIEGUE

```
    1.Clonar repositorio en su entorno local , oprimiento en la opcionde clone dentro de bitbucked.

    2.Abrir el repositorio descargado en VS code 

	    2.1 En la ruta apinecredito abriendo CMD o desde visual studio code con el comando CTRL+Ñ, 
	        ingresar los siguientes comandos para la descarga de paquetes :
	
		        . npm i body-parse chalk mongoose express morgan
		        . npm nodemon -D

```

## BASE DE DATOS 

```
 1. Solicitar usuario de acceso a la base de datos al administrador


		
 2. en el archivo apineocredito/config/properties.js , consigurar URL de servidor de base de datos:

module.exports={
    DB: 'mongodb+srv://<USUARIO>:<PASSWORD>@neocredito.cl3mgej.mongodb.net/neocredito',
}

 3. En el caso de ser base de datos local configurar :

module.exports={
    DB: 'mongodb://0.0.0.0:27017/neocredito',
}
```

## Inicializacion de la API

```
1. Ya con el ambiente local desplegado de forma correcta , podemos poner a correr la aplicacion entrando a la consola de VS code con (CTRL+Ñ), e ingresamos el comando "nodemon server.js" el cual hara que la aplicacion corre en local y trayendo los siguientes mensajes.


    [nodemon] restarting due to changes...
    [nodemon] starting `node server.js`
    El servidor esta corriendo en el puerto: 3030
    Mongo conectado : mongodb+srv://kevin_lopez:1qa2ws3ed@neocredito.cl3mgej.mongodb.net/neocredito

2. Si todo fue exitoso , puede entrar a ahcer pruebas de la aplicacion en forma local con las URL correspondientes 

- http://localhost:3030/api/add
- http://localhost:3030/api/clientes
- http://localhost:3030/api/searchcliente/"NUMERO_CEDULA"
- http://localhost:3030/api/searchclienteid/"_id"
- http://localhost:3030/api/update/"NUMERO_CEDULA"
- http://localhost:3030/api/updateid/"_id"
- http://localhost:3030/api/delete

```
