
// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const SavedItem = require('../models/SavedItem');
// const router = express.Router();
// let user_id;
// // Register Route
// router.post('/register', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const normalizedEmail = email.toLowerCase();

//     // Check if user already exists
//     const userExists = await User.findOne({ email: normalizedEmail });
//     if (userExists) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create new user
//     const newUser = new User({ email: normalizedEmail, password: hashedPassword });
//     await newUser.save();
//     const user = await User.findOne({ email: normalizedEmail });
//     console.log(user);

//     // Generate JWT token
//     const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     res.status(201).json({ message: 'Registration successful', token });
//     user_id=user._id;
//   } catch (error) {
//     console.error('Error during registration:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Login Route
// router.post('/login', async (req, res) => {

//   const { email, password } = req.body;
 
//   try {
    
//     const normalizedEmail = email.toLowerCase();

//     // Find user by email
//     const user = await User.findOne({ email: normalizedEmail });
//     console.log(user);
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     // Validate password
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     // Generate JWT token
//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     res.status(200).json({ message: 'Login successful', token });
//     console.log(user._id);
//     user_id=user._id;
//     console.log("project", user_id);
//   } catch (error) {
//     console.error('Error during login:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// console.log("project", user_id);
// // module.exports = router;





// // Route to get all saved items
// router.get('/', async (req, res) => {
//   try {
//     const items = await SavedItem.find();
//     res.json(items);
//   } catch (err) {
//     console.error("Error fetching saved items:", err);
//     res.status(500).send('Server Error');
//   }
// });

// // Route to save a new item
// router.post('/' ,async (req, res) => {
//   try {
//     const {recipeId, title, description, imageUrl, name, category, videoUrl } = req.body;
//     // console.log(userId);

//     // Create a new saved item
//     const newItem = new SavedItem({
//       userId: user_id, 
//       recipeId,
//       title,
//       description,
//       imageUrl,
//       name,       // Optional field
//       category,   // Optional field
//     });

//     await newItem.save();
//     res.status(201).json({ message: 'Recipe saved successfully', newItem });
//     console.log(newItem);
//   } catch (err) {
//     console.error('Error saving item:', err);
//     res.status(500).send('Server Error');
//   }
// });

// module.exports = router;

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const SavedItem = require('../models/SavedItem');
const authenticate = require('../middleware/authMiddleware'); // Middleware to verify JWT
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();
const { ObjectId } = require('mongodb');
let user_id;

// Register Route
router.post('/register', async (req, res) => {
  const { email, password,} = req.body;

  try {
    const normalizedEmail = email.toLowerCase();

    // Check if user already exists
    const userExists = await User.findOne({ email: normalizedEmail });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ email: normalizedEmail, password: hashedPassword });
    await newUser.save();
    const user = await User.findOne({ email: normalizedEmail });
    console.log(user);

    // Generate JWT token
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ message: 'Registration successful', token });
    user_id = user._id;
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const normalizedEmail = email.toLowerCase();
   

    // Check if user already exists
    
   
    // Find user by email
    const user = await User.findOne({ email: normalizedEmail });
    console.log("user login with details",user);
    // user_id = user._id;
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token ,user});
    console.log(user._id);
    
    console.log("project", user_id);
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// console.log("project user is what", user_id);

// Route to get all saved items (global access, no auth)

router.get('/', async (req, res) => {
  try {
    // const usersaveditems = new ObjectId('675953eb4d3a01577f52c638');
    const userId = user_id; // User ID as a string
    const items = await SavedItem.find({ userId });
    // const items = await SavedItem.find('675953eb4d3a01577f52c638');
    console.log("user id is:",user_id)
    // console.log("itemns",items);
    // console.log("novacapture");
    res.json(items);
  } catch (err) {
    console.error("Error fetching saved items:", err);
    res.status(500).send('Server Error');
  }
});


// Route to save a new item (global access, no auth)
router.post('/', async (req, res) => {
  try {
    const { recipeId, title, description, imageUrl, name, category } = req.body;

    // Create a new saved item
    const newItem = new SavedItem({
      userId: user_id,
      recipeId,
      title,
      description,
      imageUrl,
      name,       // Optional field
      category,   // Optional field
    });
    await newItem.save();
    res.status(201).json({ message: 'Recipe saved successfully', newItem });
    console.log(newItem);
  } catch (err) {
    console.error('Error saving item:', err);
    res.status(500).send('Server Error');
  }
});

// Route to get saved items for logged-in user (with JWT auth)
// router.get('/saved-items', async (req, res) => {
//   try {
//     console.log("saved items called")
//     const userId = req.userId; // Set by authenticate middleware
//     console.log(userId);
//     const savedItems = await SavedItem.find({ user_id });
//     console.log("saved item data",savedItems)
//     res.json(savedItems);
//   } catch (error) {
//     console.error("Error fetching saved items:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });




// router.get('/profile', async (req, res) => {
//   try {
//     // const usersaveditems = new ObjectId('675953eb4d3a01577f52c638');
//     const normalizedEmail = email.toLowerCase();
//     const user = await User.findOne({ email: normalizedEmail });
//     console.log("user details fetching ",user);
//     res.json(user);
//   } catch (err) {
//     console.error("Error fetching user details:", err);
//     res.status(500).send('Server Error');
//   }
// });
module.exports = router;
