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

###Usuario
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

