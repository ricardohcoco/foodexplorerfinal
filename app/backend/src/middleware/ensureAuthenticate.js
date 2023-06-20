const { verify } = require('jsonwebtoken');
const authConfig = require('../config/auth');

function ensureAuthenticated(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const {sub: user_id} = verify(token, authConfig.jwt.secret);

    req.user = {
      id: Number(user_id),
    }

    return next();
  } catch {
    return res.status(401).json({ message: 'invalid Token' });
  }
}

module.exports = ensureAuthenticated;
