// backend/services/EmailService.js

// import { createTransport } from 'nodemailer';

// const EmailService = {
//   sendEmail: async (to, subject, text) => {
//     const transporter = createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASSWORD, 
//       },
//     });

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: to,
//       subject: subject,
//       text: text,
//     };

//     try {
//       const result = await transporter.sendMail(mailOptions);
//       return result;
//     } catch (err) {
//       console.error('Email sending error:', err);
//       throw err;
//     }
//   },
// };



// export default EmailService;
