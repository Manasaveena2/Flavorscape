// backend/routes/contactUsRoutes.js
// const express = require('express');
// const ContactUs = require('../models/ContactUsModel'); // Import the model
// const router = express.Router();

// // POST route to save contact form data
// router.post('/contact-us', async (req, res) => {
//   try {
//     const { name, email, message } = req.body;
//     // Validate the incoming data
//     if (!name || !email || !message) {
//       return res.status(400).json({ message: 'All fields are required.' });
//     }

//     // Create a new ContactUs entry
//     const newContactUsEntry = new ContactUs({
//       name,
//       email,
//       message,
//     });

//     // Save the entry in MongoDB
//     await newContactUsEntry.save();

//     res.status(201).json({ message: 'Your message has been sent successfully.' });
//   } catch (error) {
//     console.error('Error saving contact message:', error);
//     res.status(500).json({ message: 'Internal server error.' });
//   }
// });

// module.exports = router;
const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
require('dotenv').config();

// Route to handle contact form submission
router.post('/contact-us', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Configure Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL, // Admin email from environment variable
        pass: process.env.ADMIN_EMAIL_PASSWORD, // Admin email password (Use App Password)
      },
    });

    // Email options
    const mailOptions = {
      from: email,
      to: process.env.ADMIN_EMAIL, // Admin Email
      subject: `New Contact Form Submission from ${name}`,
      text: `You received a new contact form submission.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
