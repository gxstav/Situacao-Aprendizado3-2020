const crypo = require('crypto')

/**
 * Criptografar senha.
 * 
 * @param {string} password - Senha do usuário.
 * @returns {string} Hash com a senha digerida do usuário.
 */
module.exports = (password) => {
  const key = crypo.createHash('sha256');
  const pwd = key.update(password, 'utf8', 'hex');
  return pwd.digest('hex');
}