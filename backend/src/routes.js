const express = require('express')
const IncidentController = require('./controllers/IncidentController')
const OngController = require('./controllers/OngController')
const ProfileController = require('./controllers/ProfileController')
const SessionControler = require('./controllers/SessionController')


const routes = express.Router()

routes.post('/sessions', SessionControler.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profile', ProfileController.index)
module.exports = routes