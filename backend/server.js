const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const productsRouter = require('./routes/products');
const licensesRouter = require('./routes/licenses');
const usersRouter = require('./routes/users');

// Load environment variables from 'vars.env' file
dotenv.config({ path: './vars.env' }); // Specify the path to your specific env file

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB:', err));

// Middleware
app.use(express.json());

// Routes
app.use('/api/products', productsRouter);
app.use('/api/licenses', licensesRouter);
app.use('/api/users', usersRouter);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});