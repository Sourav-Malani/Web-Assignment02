// backend/services/EmailService.js

const nodemailer = require('nodemailer');

const sendLicenseKeyEmail = async (recipientEmail, licenseKey) => {
  try {
    const transporter = nodemailer.createTransport({
      // Setup your email transporter configuration (e.g., SMTP, OAuth)
    });

    await transporter.sendMail({
      from: 'your@email.com',
      to: recipientEmail,
      subject: 'License Key for Software Product',
      text: `Your license key: ${licenseKey}`,
    });

    console.log('License key sent via email successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Error sending email');
  }
};

module.exports = { sendLicenseKeyEmail };
