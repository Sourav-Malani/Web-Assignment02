// backend/services/EmailService.js

const nodemailer = require('nodemailer');

const EmailService = {
  sendEmail: async (to, subject, text) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD, 
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: to,
      subject: subject,
      text: text,
    };

    try {
      const result = await transporter.sendMail(mailOptions);
      return result;
    } catch (err) {
      console.error('Email sending error:', err);
      throw err;
    }
  },
};



module.exports = EmailService;
