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

## Paso 10
* Emitir, del cliente al servidor, la lista de productos actualizada luego de enviado el formulario
* Recibir en el servidor la lista de productos actualizada
* Emitir, del servidor a todos los clientes conectados, la lista de productos actualizada
* Recibir en el cliente la lista de productos actualizada y renderizarla en la vista

## Paso 11
* Emitir la lista de productos al conectarse un nuevo cliente

## Paso 12
* Modificar el template create-product.handlebars para mostrar un formulario de chat (no olvidar colocar un div para inyectar el historial de mensajes)
* Asignar un eventlistener al formulario de chat en el script del cliente (adaptar el mismo handler usado para el formulario de productos)
* Capturar el evento emitido por el servidor socket con el historial de mensajes
* Crear la ruta para chat (POST y GET son suficientes)
* Crear el model (temporalmente con persistencia en memoria solamente, después lo cambiaremos a persistencia en archivo) para el chat
* Crear la clase manager para el chat

## Paso 13
* Cambiar la persistencia del chat a persistencia en archivo

## Autor ✒️

* **Alex Marin Mendez** - *FullStack Javascript Web Developer*, 16 de setiembre de 2022 - [alexmarinmendez](https://github.com/alexmarinmendez)

## Licencia 📄

Eres libre de analizar/estudiar/forkear/copiar/mejorar este proyecto. Se agradecerá citar esta fuente cuando uses este proyecto.

## Expresiones de Gratitud 🎁

* Comenta a tod@s sobre este proyecto 📢
* Da las gracias públicamente 🤓.