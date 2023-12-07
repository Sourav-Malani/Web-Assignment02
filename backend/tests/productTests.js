const mongoose = require('mongoose');
const Product = require('../models/Product');
const chai = require('chai');
const expect = chai.expect;

describe('Product Model Tests', () => {
  before(async () => {
    // Connect to the test database
    await mongoose.connect('mongodb://127.0.0.1:27017/testdb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  after(async () => {
    // Clean up and close the connection
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  it('should create a new product', async () => {
    const product = new Product({
      name: 'Test Product',
      version: '1.0',
      description: 'This is a test product'
    });

    const savedProduct = await product.save();

    expect(savedProduct).to.have.property('_id');
    expect(savedProduct).to.have.property('name', 'Test Product');
    expect(savedProduct).to.have.property('version', '1.0');
    expect(savedProduct).to.have.property('description', 'This is a test product');
  });

  // Add more tests as needed
});

