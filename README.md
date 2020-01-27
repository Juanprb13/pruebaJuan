# Proyecto de pedidos
Tener en cuenta lo siguiente 
-Tener Mysql instalado en tu Pc
-Para los EndPoints Recomendable usar Postman

##Ejecución

Obligatorio tener node instalado para que pueda levantar el servidor 
```
npm start
```

### EndPoints
para los endpoints tener en cuenta lo siguiente : 

Es una BD relacional por lo cual hay que cumplir con el flujo dado 

### Usuario
1) Crear usuario 
`http://localhost:5000/api/usuarios/store`
  * Este recibe como parametros :  `nombre,apellido,telefono,email`
  * Si el correo ya existe arrojara un mensaje "Este correo ya esta en uso"
  * Si falta algun parametro el mensaje sera : "Verifica que todos los campos hayan sido enviados"
2) Actualizar usuario (Opcional) 
`http://localhost:5000/api/usuarios/update/:id_usuario`
  * En este punto recibe los mismos parametros que el anterior (No todos son obligatorios, los puedes mandar vacios)
  * El parametro `:id_usuario` es obligatorio , por que el sistema necesita saber que usuario voy a editar
3) Lista de usuarios 
`http://localhost:5000/api/usuarios`
  *No nesesitas pasar ningun parametro 
  *Este EndPoint te trae el listado de usuarios creados
### Dirección 

1) Listado de direciones por usuario
`http://localhost:5000/api/direcciones/:idUsuario`
 * Obligatorio : El parametro `:idUsuario` este para que el filtro se cumpla y puedas ver la información asociada a ese usuario 

2) Asignación de direciones a un usuario especifico
`http://localhost:5000/api/direcciones/store/:idUsuario`
 *Obligatorio : El campo `:idUsuario` como parametro en la URL 
 * Obligatorio : El campo `direccion` como dato en el Body de la petición , este para que sepamos cual dirección fue la que se asigno 
 
 ### Pedidos
 1) Listado de todos los pedidos
 `http://localhost:5000/api/pedidos`
  * Este nos muestra toda la información de todos los pedidos como se estipulo en la prueba , mostrando tambien el usuario que se le asigno a ese pedido 
2) Creación de pedidos
 `http://localhost:5000/api/pedidos/store/:direccion`
  *Este recibe el id de la direción  para saber a que direción se va a enviar el pedido (El sistema sabe automaticamente que usuario tiene esa direción)
  *Recibe como parametro en el body de la petición los siguientes campos : `fechaEntrega,desde,hasta`
  *Recibe como parametro de la URL  de la petición los siguientes campos :  `direccion `
  * Todos los campos anteriormente mencionados  son obligatorios
3) Editar pedido 
 `http://localhost:5000/pedidos/update/:id/:address/:date`
  *Todos los parametros de la Url  son ogligatorios
4) El mas importante Busqueda de pedido especifico 
 `http://localhost:5000/api/pedidos/search/:id`
 * Solo necesitas el `:id` del pedido y este te va a mostrar el pedido especificamente  buscado con toda la información del usuario que lo creo y su zona horaria ( Desde , Hasta )


## Importante 
Todas las rutas de creación son  `POST`
Todas las rutas de consulta son `GET`
Tdoas las rutas de Edición son `Put `
