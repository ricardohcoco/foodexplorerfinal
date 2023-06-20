
const knex = require('../database/knex');
const DiskStorage = require('../providers/DiskStorage');

class DishesController {
  async create(req, res) {
    try {
      const { name, ingredients, price, category } = req.body;
      const imageName = req.file.filename;
      const diskStorage = new DiskStorage();

      const existingDish = await knex('dishes')
        .select('id')
        .where('name', name)
        .first();

      if (existingDish) {
        return res.status(400).json({ error: 'Dish already exists' });
      }

      const [data] = await knex('dishes').insert({
        image: imageName,
        name,
        ingredients,
        price,
        category,
      });

      const filename = await diskStorage.saveFile(imageName);
      
      res.status(201).json({ id: data, filename, name, ingredients, price, category });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  }


  async read(req, res) {
    const dishes = await knex('dishes').select(
      'id',
      'name',
      'image',
      'ingredients',
      'price',
      'category'
    );
    res.status(200).json(dishes);
  }

  async readById(req, res) {
    const dishId = req.params.id;

    const dish = await knex('dishes')
      .select('id', 'image', 'name', 'ingredients', 'price', 'category')
      .where('id', dishId)
      .first();

    if (dish) {
      res.status(200).json(dish);
    } else {
      res.status(404).json({ message: 'Dish not found' });
    }
  }
}

module.exports = DishesController;
