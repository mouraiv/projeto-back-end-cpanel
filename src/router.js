const express = require('express');
const user = require('./controller/user');
const routes = express.Router();

const users = require('./controller/user')

//Rotas de usuários
routes.post('/api/users.create',user.create);
routes.get('/api/users.index',user.index);
routes.get('/api/users.details/:_id',user.details);
routes.delete('/api/users.delete/:_id',user.delete);
routes.put('/api/users.update',user.update);

module.exports = routes