const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');
const licenseRoutes = require('./routes/licenses');
const connectDB = require('./config/db');
const cors = require('cors');
// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;
console.log('MongoDB URI:', process.env.MONGODB_URI);

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
// Enable All CORS Requests for development purposes
app.use(cors());
// Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/licenses', licenseRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

