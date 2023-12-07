// backend/routes/licenses.js
const express = require('express');
const router = express.Router();
const License = require('../models/License');
const EmailService = require('../services/EmailService');

// ... (existing code)
router.post('/activate', async (req, res) => {
  const { licenseKey /*, userId*/ } = req.body;

  try {
    // Activation logic: Find the license and update its status
    // Respond with success message or status
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new license
router.post('/', async (req, res) => {
  const { key, product, recipientEmail } = req.body;

  const license = new License({
    key,
    product,
  });

  try {
    const newLicense = await license.save();
    
    // Send email with the license key
    const emailSubject = "Your License Key";
    const emailBody = `Your license key is: ${key}`;
    await EmailService.sendEmail(recipientEmail, emailSubject, emailBody);

    res.status(201).json(newLicense);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// GET all licenses
router.get('/', async (req, res) => {
  try {
    const licenses = await License.find();
    res.json(licenses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
