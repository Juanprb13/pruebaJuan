const express = require('express')
const App = express.Router()

//controlladores 
const PedidoController = require('../Controllers/Pedido')
App.get('/pedidos',PedidoController.getPedido)
App.post('/pedidos/store/:direccion',PedidoController.storePedido)
App.put('/pedidos/update/:id/:address/:date',PedidoController.updatePedido)
App.get('/pedidos/search/:id',PedidoController.getPedidoById)

module.exports = App