const { Router } = require('express');

const userRouter = require('./users.Routes');
const dishRouter = require('./dishes.Routes');
const sessionRouter = require('./sessions.routes');

const routes = Router();


routes.use('/users', userRouter);
routes.use('/sessions', sessionRouter);
routes.use('/dishes', dishRouter);



module.exports = routes;
