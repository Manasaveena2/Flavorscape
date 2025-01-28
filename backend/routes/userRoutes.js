const express = require('express');
const router = express.Router();
const { getUserDetails } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/profile', authMiddleware, getUserDetails);

module.exports = router;
