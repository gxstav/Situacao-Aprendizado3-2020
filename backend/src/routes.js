const express = require('express')
const { celebrate, Joi, Segments } = require('celebrate')
const ong = require('./controllers/OngController')
const incident = require('./controllers/IncidentController')
const auth = require('./controllers/AuthController')

const routes = express.Router()

//AUTH ROUTE
routes.post('/login', celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required()
  })
}), auth.login)



routes.post('/token', celebrate({
  [Segments.HEADERS]: Joi.object().keys({
    authorization: Joi.string().required()
  })
}), auth.refresh)


// ONG ROUTES
routes.post('/cadastro', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    phone: Joi.string().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
    url: Joi.string().optional().allow(''),
    about: Joi.string().required()
  })
}), ong.create)

// INCIDENT ROUTES
routes.post('/projetos', auth.authenticate, celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    type: Joi.string().required(),
    address: Joi.string().required(),
    date_start: Joi.string().required(),
    date_end: Joi.string().required(),
    segment: Joi.array().required().items(Joi.string().min(1)),
    image: Joi.string().allow(''),
    description: Joi.string().required()
  })
}))
// routes.get('/projetos', auth.authenticate, incident.index)
// routes.get('/projetos/:id', incident.get)
// routes.delete('/projeto/:id', incident.delete)


module.exports = routes