const { Router } = require('express');
const UsersController = require('../controllers/userController'); 


const usersRoutes = Router();
const usersController = new UsersController(); 

usersRoutes.post('/', usersController.create); 
usersRoutes.get('/', usersController.read);
usersRoutes.get('/:id', usersController.readById);

module.exports = usersRoutes;
