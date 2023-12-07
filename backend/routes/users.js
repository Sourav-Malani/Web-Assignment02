// backend/routes/users.js

const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST: Register a new user
router.post('/', async (req, res) => {
  const { username, email } = req.body;
  const user = new User({ username, email });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET: Retrieve all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Additional routes for updating and deleting users can be added here

module.exports = router;

