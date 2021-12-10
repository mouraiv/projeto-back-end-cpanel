const express = require('express');
const path = require('path');
const user = require('./controller/user');
const home = require('./controller/home');
const routes = express.Router();

//Rota Homes
routes.get('/', home.index);
routes.get('/admin', home.admin);

//Rotas API de usuários
routes.post('/api/users.create',user.create);
routes.get('/users',user.index);
routes.get('/api/users.details/:_id',user.details);
routes.delete('/api/users.delete/:_id',user.delete);
routes.put('/api/users.update',user.update);

module.exports = routes