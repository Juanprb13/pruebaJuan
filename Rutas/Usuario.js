const express = require('express')
const App = express.Router()
//controlador

const UsuarioController = require('../Controllers/Usuario')

App.get('/usuarios',UsuarioController.getUsuarios)
App.post('/usuarios/store',UsuarioController.storeUsuario)
App.put('/usuarios/update/:id',UsuarioController.updateUsuario)


module.exports = App