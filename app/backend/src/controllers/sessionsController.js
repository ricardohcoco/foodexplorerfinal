const knex = require('../database/knex');
const { compare } = require('bcryptjs');
const authConfig = require('../config/auth');
const { sign } = require('jsonwebtoken');

class SessionsController {
  async create(req, res) {
    const { email, password } = req.body;

    const user = await knex('users').where({ email }).first();

    if (!user) {
      return res.status(401).send({ message: 'Invalid email or password' });
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      return res.status(401).send({ message: 'Invalid email or password' });
    }

    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn
    })

    return res.json({ user, token});
  }
}

module.exports = SessionsController;
