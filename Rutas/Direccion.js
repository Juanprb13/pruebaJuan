'use strict '

const express = require('express')
const App = express.Router()

//controllador

const DireccionController = require('../Controllers/Direccion')

App.get('/direcciones/:id',DireccionController.DireccionByUser)
App.post('/direcciones/store/:id',DireccionController.save)

module.exports = App