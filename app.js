const connection = require('./Database/connection')

const express = require('express')
const route = express()


const bodyParser = require('body-parser')

//impostamos rutas
const rutaPedido = require('./Rutas/Pedido')
const rutaUSuario = require('./Rutas/Usuario')

route.use(bodyParser.urlencoded({extended:false}))
route.use(bodyParser.json())

route.use('/api',rutaPedido)
route.use('/api',rutaUSuario)

route.listen(5000)