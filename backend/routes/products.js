// backend/routes/products.js

const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// POST: Add a new product
router.post('/', async (req, res) => {
  const { name, version, description } = req.body;
  const product = new Product({ name, version, description });

  try {
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET: Retrieve all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Additional routes like PUT (update) and DELETE can be added here

module.exports = router;

