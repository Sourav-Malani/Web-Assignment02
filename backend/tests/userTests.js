const mongoose = require('mongoose');
const chai = require('chai');
const expect = chai.expect;
const User = require('../models/User');

describe('User Model Tests', () => {
  before(async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/testdb');
  });

  after(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  it('should create a new user', async () => {
    const user = new User({
      username: 'testuser',
      email: 'test@example.com'
    });

    const savedUser = await user.save();

    expect(savedUser).to.have.property('_id');
    expect(savedUser).to.have.property('username', 'testuser');
    expect(savedUser).to.have.property('email', 'test@example.com');
  });

  // Additional tests can be added here
});
