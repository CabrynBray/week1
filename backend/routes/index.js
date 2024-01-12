const routes = require('express').Router();

const controller =  require('../controller')

routes.get('/professional', controller.awesomeFunction);

module.exports = routes;