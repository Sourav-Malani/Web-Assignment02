// backend/routes/licenses.js

const License = require('../models/License');
const EmailService = require('../services/EmailService');

// ... (existing code)

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
    await EmailService.sendLicenseKeyEmail(recipientEmail, key);

    res.status(201).json(newLicense);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
