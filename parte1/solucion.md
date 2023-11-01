# 🎁 Requerimientos
Al tener desconocimientos de dockerización al momento de presentar la prueba técnica, se enlistan
los requerimientos que se deben tener para ejecutar la aplicación

* Instalar **Node JS**
* Correr el comando `npm install` en `parte1\project\administracion-fondos` para instalar las dependencias
* Correr el comando `npm install uuid` en `parte1\project\administracion-fondos` para poder instalar la librería que generará el identificador único de cada transacción
* Correr el comando `npm run dev` en `parte1\project\administracion-fondos` para ejecutar la aplicación
* Abrir el link para correr la aplicación en localhost
    
# 🧠 Desarrollo de la solución
El cliente necesita un portal web donde vea cuánto saldo tiene disponible y pueda elegir qué productos desea adicionar (aperturas) a su portafolio, por otro lado, en su portafolio, puede decidir qué productos desea retirar (cancelaciones).

Es un aplicativo similar a un carrito de compras, por lo que usaré React JS para el desarrollo de la aplicación, ya que es una librería que me permite crear interfaces de usuario de forma rápida y sencilla. Además de crear componentes modulares.

Le aplicaré un poco de estilos con CSS, para que el usuario tenga una mejor experiencia al momento de usar la aplicación.

También quise elegir Vite por encima de Create React App porque la experiencia me ha demostrado que es más ligero y rápido.

Hago uso de contextos y custom hooks para el manejo de estados globales, pues así los puedo compartir a todo el árbol de componentes en React sin usar drilling y crear más dependencias.

Iba a hacer uso del LocalStorage de React para que el usuario pudiera ver los productos que tenía en su portafolio así cerrara la ventana pero me vi un poco corto de tiempo y no lo pude implementar.