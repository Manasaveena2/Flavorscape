// const express = require('express');
// const jwt = require('jsonwebtoken');
// const Admin = require('../models/Admin');
// const protect = require('../middleware/authMiddleware'); // Authentication middleware

// const router = express.Router();

// // Admin registration (first-time setup)
// router.post('/register', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     // Check if an admin already exists
//     const existingAdmin = await Admin.findOne({ username });
//     if (existingAdmin) {
//       return res.status(400).json({ message: 'Admin already exists.' });
//     }

//     // Create new admin
//     const newAdmin = new Admin({ username, password });
//     await newAdmin.save();

//     // Generate token
//     const token = jwt.sign({ id: newAdmin._id }, process.env.JWT_SECRET, {
//       expiresIn: '1h',
//     });

//     res.status(201).json({ message: 'Admin created', token });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error });
//   }
// });

// // Admin login
// router.post('/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const admin = await Admin.findOne({ username });
//     if (!admin) {
//       return res.status(400).json({ message: 'Admin not found' });
//     }

//     const isMatch = await admin.comparePassword(password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid password' });
//     }

//     // Generate JWT token
//     const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
//       expiresIn: '1h',
//     });

//     res.json({ message: 'Login successful', token });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error });
//   }
// });

// module.exports = router;
const express = require('express');
const Admin = require('../models/Admin'); 
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/authMiddleware'); // Import the Admin model

const router = express.Router();
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const admin = await Admin.findOne({ username });
      if (!admin) {
        return res.status(400).json({ message: 'Admin not found' });
      }
  
      const isMatch = await admin.comparePassword(password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid password' });
      }
  
      // Generate JWT token
      const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      res.json({ message: 'Login successful', token });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  });

// Admin registration (for first-time setup)
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if an admin already exists with the provided username
    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin already exists.' });
    }

    // Create a new admin with the provided username and password
    const newAdmin = new Admin({ username, password });

    // Save the new admin to the database
    await newAdmin.save();

    // Respond with a success message
    res.status(201).json({ message: 'Admin created successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
