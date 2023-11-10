# 🎁 Requerimientos
Al tener desconocimientos de dockerización al momento de presentar la prueba técnica, se enlistan
los requerimientos que se deben tener para ejecutar la aplicación

## Front
* Instalar **Node JS**
* Correr el comando `npm install` en `parte1\project\administracion-fondos-front` para instalar las dependencias
* Correr el comando `npm install uuid` en `parte1\project\administracion-fondos-front` para poder instalar la librería que generará el identificador único de cada transacción
* Correr el comando `npm run dev` en `parte1\project\administracion-fondos-front` para ejecutar la aplicación
* Abrir el link para correr la aplicación en localhost

## Back
* Instalar la libería **Flask** para poder ejecutar el servidor de python
* Ejecutar el script `server.py` en `parte1\project\administracion-fondos-back` para inicializarlo de manera local, en éste se encuentra la API que se consumirá desde el front
    
# 🧠 Desarrollo de la solución
El cliente necesita un portal web donde vea cuánto saldo tiene disponible y pueda elegir qué productos desea adicionar (aperturas) a su portafolio, por otro lado, en su portafolio, puede decidir qué productos desea retirar (cancelaciones).

Es un aplicativo similar a un carrito de compras, por lo que usaré React JS para el desarrollo de la aplicación, ya que es una librería que me permite crear interfaces de usuario de forma rápida y sencilla. Además de crear componentes modulares.

Le aplicaré un poco de estilos con CSS, para que el usuario tenga una mejor experiencia al momento de usar la aplicación.

También quise elegir Vite por encima de Create React App porque la experiencia me ha demostrado que es más ligero y rápido.

Traeré los productos de BTG desde una API creada con el backend en Python.
También, mantendré un registro de las transacciones en este backend, para que cuando el usuario desee ver el historial, baste con realizar una petición y mostrarla en el front.

Hago uso de contextos y custom hooks para el manejo de estados globales, pues así los puedo compartir a todo el árbol de componentes en React sin usar drilling ni crear más dependencias.