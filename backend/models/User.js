// backend/models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  // Add other relevant fields such as password, roles, etc.
});

module.exports = mongoose.model('User', userSchema);

