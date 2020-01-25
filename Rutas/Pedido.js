const express = require('express')
const App = express.Router()

//controlladores 
const PedidoController = require('../Controllers/Pedido')
App.get('/pedidos',PedidoController.getPedido)
App.post('/pedidos/store',PedidoController.storePedido)

module.exports = App