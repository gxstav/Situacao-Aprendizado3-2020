const bcrypt = require('bcrypt')

/**
 * Criptografar senha.
 * 
 * @param {string} password - Senha do usuário.
 * @returns {string} Hash com a senha digerida do usuário.
 */
module.exports = (password) => bcrypt.hashSync(password, 12)