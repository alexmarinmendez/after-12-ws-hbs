# Desafio 6 in Backend course with Node.js @ Coderhouse
## Paso 1
* Crear una carpeta para el proyecto.
* Ingresar a la carpeta.
* Inicializar el proyecto con npm.
```sh
mkdir after-12-ws-hbs
cd after-12-ws-hbs
npm init -y
```
* Agregar el archivo .gitignore
* Crear la estructura de carpetas según MVC.

![Folder structure](https://i.imgur.com/o3WXLif.jpg)

## Paso 2
* Crear los scripts de ejecución para los entornos de PROD y DEV

![Scripts](https://i.imgur.com/p80niAS.jpg)
* Instalar las dependencias
```sh
npm i express express-handlebars
```

## Paso 3
* Crear el servidor express en el puerto 8080 para DEV y process.env.PORT para PROD

## Paso 4
* Setear el motor de plantillas (handlebars en este caso)
* Crear las plantillas dentro de la carpeta views

![Template files](https://i.imgur.com/9QspBer.jpg)

## Paso 5
* Crear el model de productos (Temporalmente con persistencia en memoria. Más adelante la cambiaremos a persistencia en archivo)
* Crear la clase ProductManager con los métodos necesarios para las operaciones solicitadas.

## Paso 6
* Crear las rutas con base /products utilizando el router de express
* Configurar el router de products en el servidor

## Paso 7
* Modiificar la plantilla HBS para que muestre los products creados debajo del formulario


## Paso 8
* Instalar la librería socket.io
```sh
npm i socket.io
```
* Crear el servidor Web Socket
* Configurar el socket del lado del cliente (view)
* Configurar el evento connection del lado del servidor

## Paso 9
* Modificar el formulario del template para manejar el envío por Javascript (esto es necesario para emitir un mensaje al server mediante socket cuando el formulario es enviado)
* Escribir la función handler en el archivo Javascript


## Autor ✒️

* **Alex Marin Mendez** - *FullStack Javascript Web Developer*, 16 de setiembre de 2022 - [alexmarinmendez](https://github.com/alexmarinmendez)

## Licencia 📄

Eres libre de analizar/estudiar/forkear/copiar/mejorar este proyecto. Se agradecerá citar esta fuente cuando uses este proyecto.

## Expresiones de Gratitud 🎁

* Comenta a tod@s sobre este proyecto 📢
* Da las gracias públicamente 🤓.