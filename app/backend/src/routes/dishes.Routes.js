const { Router } = require('express');
const DishesController = require('../controllers/dishController');
const multer = require('multer');
const uploadConfig = require('../upload');

const dishesRoutes = Router();
const dishesController = new DishesController();

const upload = multer(uploadConfig.MULTER);

dishesRoutes.get('/', dishesController.read);
dishesRoutes.get('/:id', dishesController.readById);
dishesRoutes.post('/', upload.single('image'), dishesController.create);

module.exports = dishesRoutes;
