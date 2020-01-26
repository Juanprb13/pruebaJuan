const express = require('express')
const App = express.Router()
//controlador

const UsuarioController = require('../Controllers/Usuario')

App.get('/usuarios',UsuarioController.getUsuarios)


module.exports = App