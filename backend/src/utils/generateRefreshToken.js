const jwt = require('jsonwebtoken')
module.exports = (user) => jwt.sign(user, process.env.SECRET_TOKEN_REFRESH)