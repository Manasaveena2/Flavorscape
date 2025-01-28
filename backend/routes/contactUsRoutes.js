// backend/routes/contactUsRoutes.js
const express = require('express');
const ContactUs = require('../models/ContactUsModel'); // Import the model
const router = express.Router();

// POST route to save contact form data
router.post('/contact-us', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    // Validate the incoming data
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Create a new ContactUs entry
    const newContactUsEntry = new ContactUs({
      name,
      email,
      message,
    });

    // Save the entry in MongoDB
    await newContactUsEntry.save();

    res.status(201).json({ message: 'Your message has been sent successfully.' });
  } catch (error) {
    console.error('Error saving contact message:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

module.exports = router;
