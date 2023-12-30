// backend/routes/licenses.js
const express = require('express');
const router = express.Router();
const License = require('../models/License');
const EmailService = require('../services/EmailService').default;


// GET activated licenses
router.get('/activated', async (req, res) => {
  try {
    const activatedLicenses = await License.find({ activated: true });
    res.json(activatedLicenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// ... (existing code)
router.post('/activate', async (req, res) => {
  const { licenseKey, userId } = req.body;

  try {
    // Find the license by its key
    const license = await License.findOne({ key: licenseKey });

    if (!license) {
      return res.status(404).json({ message: 'License not found' });
    }

    // Check if the license is already activated
    if (license.activated) {
      return res.status(400).json({ message: 'License is already activated' });
    }

    // Check if the user ID matches the expected user (if needed)
    if (userId && (!license.user || license.user.toString() !== userId)) {
      return res.status(403).json({ message: 'Invalid user for this license' });
    }

    // Update the license status to activated
    license.activated = true;

    // Save the updated license document
    await license.save();

    // Respond with a success message
    res.status(200).json({ message: 'License activated successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET activated licenses with associated user data
router.get('/activated-with-user', async (req, res) => {
  try {
    const activatedLicenses = await License.find({ activated: true }).populate('user', 'username'); // Assuming 'username' is the field to display
    res.json(activatedLicenses);
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
    //await EmailService.sendEmail(recipientEmail, emailSubject, emailBody);

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

// Associate a user with a license
// Associate a user with a license
router.post('/associate', async (req, res) => {
  const { licenseId, userId } = req.body;

  try {
    // Find the license by its ID
    const license = await License.findById(licenseId);

    if (!license) {
      return res.status(404).json({ message: 'License not found' });
    }

    // Check if the license is already associated with a user
    if (license.user) {
      return res.status(400).json({ message: 'License is already associated with a user' });
    }

    // Update the license document to include the user information
    license.user = userId;

    // Save the updated license document
    await license.save();

    // Respond with a success message
    res.status(200).json({ message: 'User associated with license successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
