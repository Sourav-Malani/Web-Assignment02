const mongoose = require('mongoose');
const chai = require('chai');
const expect = chai.expect;
const Product = require('../models/Product');
const User = require('../models/User');
const License = require('../models/License');

describe('License Model Tests', () => {
  let productId, userId;

  before(async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/testdb');
    
    // Create a test product
    const product = new Product({
      name: 'Test Product',
      version: '1.0',
      description: 'A test product'
    });
    const savedProduct = await product.save();
    productId = savedProduct._id;

    // Create a test user
    const user = new User({
      username: 'testuser',
      email: 'testuser@example.com'
    });
    const savedUser = await user.save();
    userId = savedUser._id;
  });

  after(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  it('should create a new license', async () => {
    const license = new License({
      key: '12345-ABCDE',
      product: productId,
      user: userId,
      activated: false
    });

    const savedLicense = await license.save();

    expect(savedLicense).to.have.property('_id');
    expect(savedLicense).to.have.property('key', '12345-ABCDE');
    expect(savedLicense).to.have.property('product').to.deep.equal(productId);
    expect(savedLicense).to.have.property('user').to.deep.equal(userId);
    expect(savedLicense).to.have.property('activated', false);
  });

  // Additional tests can be added here
});
