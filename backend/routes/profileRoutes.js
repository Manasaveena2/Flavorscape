const express = require('express');
const User = require('../models/User'); // Import User model
const { authenticate } = require('../middleware/authMiddleware'); // Import authentication middleware
const router = express.Router();

// GET route to fetch the user's profile data
router.get('/profile', authenticate, async (req, res) => {
  try {
    // Find user by the userId attached to the request (from JWT)
    const user = await User.findById(req.userId); // Assuming you store userId in JWT

    // If user not found, return a 404 error
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Send user details (e.g., name and email)
    res.json({
      name: user.name,
      email: user.email,
      username: user.username, // Add any other fields you want to send
    });
  } catch (error) {
    console.error('Error fetching profile data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
