const express = require('express');
const routes = express.Router();
const generateToken = require('../utils/generateToken');

const middlewares = require('../middlewares'); 

routes.post('/sales', middlewares.validation, (req, res) => {
  return res.status(200).json({message: "Venda cadastrada com sucesso"});
});

routes.post('/signup', middlewares.login, (req, res) => {
  const token = generateToken();
  return res.status(200).json({token});
});

module.exports = routes;