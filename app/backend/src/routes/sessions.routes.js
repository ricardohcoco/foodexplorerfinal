const { Router} = require('express')

const SessionsController = require('../controllers/sessionsController')
const sessionsController = new SessionsController()
const ensureAuthenticated = require('../middleware/ensureAuthenticate');

const sessionsRoutes = Router();

sessionsRoutes.post('/', sessionsController.create);

sessionsRoutes.post('/login', ensureAuthenticated, sessionsController.create);

module.exports = sessionsRoutes;
