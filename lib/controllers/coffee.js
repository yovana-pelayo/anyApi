const { Router } = require('express');
const Coffee = require('../models/Coffee');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const matchingCoffee = await Coffee.getById(id);
    res.json(matchingCoffee);
  })
  .get('/', async (req, res) => {
    const coffee = await Coffee.getAll();
    res.json(coffee);
  });
