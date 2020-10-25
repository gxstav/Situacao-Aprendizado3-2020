const express = require('express')
const { celebrate, Joi, Segments } = require('celebrate')
const ong = require('./controllers/OngController')
// const incident = require('./controllers/IncidentController')
// const profile = require('./controllers/ProfileController')
// const session = require('./controllers/SessionController')
const routes = express.Router()

// ONG ROUTES
routes.post('/cadastro', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    phone: Joi.string().required().length(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
    url: Joi.string().optional().allow(''),
    about: Joi.string().required()
  })
}), ong.create)


module.exports = routes