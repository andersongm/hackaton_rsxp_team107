const express = require('express');
const routes = express.Router();

const EmpresasController = require('./controllers/EmpresasController.js');
const AlunosController = require('./controllers/AlunosController');

// Routes
routes.get('/empresas', EmpresasController.index);
routes.get('/alunos', AlunosController.index);
routes.get('/cursos', EmpresasController.index);

module.exports = routes;