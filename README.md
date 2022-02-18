## PROYECTO FINAL CURSO DE BACKEND - CODERHOUSE ##

La api cuenta con módulos que se pueden consumir mediante postman. No hay un frontend desarrollado.
Una consideración importante es que se implementó la persistencia en mongodb completamente, y file system solo para productos.
Los errores de tipo warn y error se loguean en consola y se escriben en un archivo errores.log
Se implementó login por passport-local.

### Módulos: ###
- Auth: gestiona a los usuarios con sus sesiones
- Carts: gestiona los carritos que los usuarios dan de alta/modifican/eliminan
- Products: gestiona a los productos
- Messages: gestiona los mensajes que el usuario comparte de forma pública(chat general) o privada(solo con el admin)
- Server: muestra información del servidor

#### AUTH: ####
- POST localhost:8080/api/user/signup
Lleva un body con username, password, name, address, email, telephone, age y photo. Ejemplo de tipos de datos esperados:
{
  username: string, 
  password: string,
  name: string,
  address: string,
  email: string,
  telephone: string,
  age: number,
  photo: string
}

- POST localhost:8080/api/user/login
Lleva un body con username y password.Ejemplo de tipos de datos esperados:
{
  username: string, 
  password: string
}

- POST localhost:8080/api/user/logout
No lleva body

- GET localhost:8080/api/user/image
Requiere que haya un usuario logueado para obtener la imagen del mismo

- GET localhost:8080/api/user/user
Requiere que haya un usuario logueado para obtener toda la información del mismo


#### PRODUCTS: ####
- GET localhost:8080/api/products
No lleva body, trae todos los productos

- GET localhost:8080/api/products/:id
Luego del último slash se pasa el id del producto a consultar

- GET localhost:8080/api/products/cat/:categoria
Luego del último slash se pasa la categoría a consultar

- POST localhost:8080/api/products
Lleva un body con title, description, code, price, stock, thumbnail y category. Ejemplo con tipos de dato esperados:
{
    "title": string,
    "description": string,
    "code": string,
    "price": number,
    "stock": number,
    "thumbnail": string,
    "category": string
}

- DELETE localhost:8080/api/products/:id
Luego del último slash se pasa el id del producto a eliminar

- PUT localhost:8080/api/products/:id
leva un body con title, description, code, price, stock, thumbnail y category. Ejemplo con tipos de dato esperados:
{
    "title": string,
    "description": string,
    "code": string,
    "price": number,
    "stock": number,
    "thumbnail": string,
    "category": string
}

#### CARTS: ####
- GET localhost:8080/api/carts/
No lleva body, trae todos los carritos

- GET localhost:8080/api/carts/:cartId/productos
Lleva el id del carrito a consultar

- POST localhost:8080/api/carts
Crea un carrito, si hay usuario logueado lo asocia al usuario, pero si no hay usuario logueado avisa

- POST localhost:8080/api/carts/:idCart/productos/:idProduct
Agrega un producto con determinado id al carrito con el id indicado

- POST localhost:8080/api/carts/:idCart
Agrega el campo "comprado" con valor true al carrito con id dado

- DELETE localhost:8080/api/carts/:idCart/productos/:idProduct
Elimina un producto con determinado id del carrito con id dado

- DELETE localhost:8080/api/carts/:idCart
Elimina el carrito por id

#### MESSAGES: ####
- GET localhost:8080/api/messages
Obtiene todos los mensajes con atributo type = public de todos los usuarios

- GET localhost:8080/api/messages/user/:userEmail
Obtiene todos los mensajes con atributo type = private del usuario con email dado

- POST localhost:8080/api/messages
Requiere que haya un usuario logueado. Lleva un body con type y messageText. Ejemplo con tipos de dato esperados:
{
    "type": string,
    "messageText": string
}

#### SERVER: ####
- GET localhost:8080/api/server
Muestra modo (fork o cluster), puerto, PID, mongoURI, tiempo de expiración del login y modo de persistencia

