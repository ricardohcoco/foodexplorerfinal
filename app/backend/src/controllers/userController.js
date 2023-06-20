const { hash } = require('bcryptjs');
const knex = require('../database/knex');

class usersController {
  async create(req, res) {
    const { name, email, password, isAdmin } = req.body;
    const existingUser = await knex('users')
      .select('id')
      .where('email', email)
      .first();

    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const hashedPassword = await hash(password, 8);
    const [data] = await knex('users').insert({
      name,
      email,
      password: hashedPassword,
      isAdmin
    });

    res.status(201).json({ id: data, name, email, password: hashedPassword, isAdmin });
  }

  async read(req, res) {
    const users = await knex('users').select('id', 'name', 'email', 'password', 'isAdmin');
    res.status(200).json(users);
  }

  async readById(req, res) {
    const userId = req.params.id;

    const user = await knex('users')
      .select('id', 'name', 'email', 'password')
      .where('id', userId)
      .first();

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  }
}

module.exports = usersController;
