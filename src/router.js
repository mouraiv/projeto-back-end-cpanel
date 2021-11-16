const express = require('express');
const user = require('./controller/user');
const routes = express.Router();

const users = require('./controller/user')

//Rotas de usuários
routes.post('/api/users.create',users.create);
routes.get('/api/users.index',users.index);
routes.get('/api/users.details/:_id',users.details);
routes.delete('/api/users.delete/:_id',user.delete)

module.exports = routes