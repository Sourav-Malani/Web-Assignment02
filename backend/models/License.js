// backend/models/License.js

const mongoose = require('mongoose');

const licenseSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
    unique: true, // Ensure uniqueness
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null,
  },
  activated: {
    type: Boolean,
    default: false,
  },
  // Additional fields like expiration date can be added here
});

module.exports = mongoose.model('License', licenseSchema);
