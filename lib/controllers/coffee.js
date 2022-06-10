const { Router } = require('express');
const Coffee = require('../models/Coffee');

module.exports = Router().get('/', async (req, res) => {
  const coffee = await Coffee.getAll();
  res.json(coffee);
});
