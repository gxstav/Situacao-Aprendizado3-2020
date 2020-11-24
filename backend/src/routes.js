const express = require('express')
const { celebrate, Joi, Segments } = require('celebrate')
const ong = require('./controllers/OngController')
const project = require('./controllers/ProjectController')
const auth = require('./controllers/AuthController')

const routes = express.Router()

//AUTH ROUTE
routes.post('/login', celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required()
  })
}), auth.login)

routes.delete('/logout', celebrate({
  [Segments.HEADERS]: Joi.object().keys({
    'x-refresh-token': Joi.string().required()
  }).options({ allowUnknown: true })
}), auth.logout)

routes.post('/token', celebrate({
  [Segments.HEADERS]: Joi.object().keys({
    'x-refresh-token': Joi.string().required()
  }).options({ allowUnknown: true })
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
    type: Joi.number().integer().required(),
    address: Joi.string().required(),
    date_start: Joi.string().required(),
    date_end: Joi.string().required(),
    segment: Joi.array().required().items(Joi.string().min(1)),
    description: Joi.string().required()
  })
}), project.create)
// routes.get('/casos', incident.index)
// routes.get('/projetos', auth.authenticate, incident.index)
// routes.get('/projetos/:id', incident.get)
// routes.delete('/projeto/:id', incident.delete)


module.exports = routes