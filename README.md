## PROYECTO FINAL CURSO DE BACKEND - CODERHOUSE ##

La api cuenta con módulos que se pueden consumir mediante postman. No hay un frontend desarrollado.

### Módulos: ###
- Auth: gestiona a los usuarios con sus sesiones
- Carts: gestiona los carritos que los usuarios dan de alta/modifican/eliminan
- Products: gestiona a los productos
- Messages: gestiona los mensajes que el usuario comparte de forma pública(chat general) o privada(solo con el admin)

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


PRODUCTS