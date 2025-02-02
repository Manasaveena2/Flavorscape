// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const bodyParser = require('body-parser');
// const authRoutes = require('./routes/authRoutes');
// const userRoutes = require('./routes/userRoutes');

// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/user', userRoutes);

// // Database connection
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.log('Error connecting to MongoDB:', err));

// // Start server
// const port = process.env.PORT || 5000;
// app.listen(port, () => console.log(`Server is running on port ${port}`));
// // const express = require('express');
// // const mongoose = require('mongoose');
// // const cors = require('cors');
// // const dotenv = require('dotenv');
// // const bodyParser = require('body-parser');
// // const fallbackStorage = require('./utils/fallbackStorage'); // Adjust path if necessary
// // const authRoutes = require('./routes/authRoutes');
// // const userRoutes = require('./routes/userRoutes');
// // const User = require('./models/User'); // Ensure that User model is imported

// // dotenv.config();

// // const app = express();

// // // Middleware
// // app.use(cors());
// // app.use(bodyParser.json());

// // // Routes
// // app.use('/api/auth', authRoutes);
// // app.use('/api/user', userRoutes);

// // // MongoDB connection and fallback initialization
// // mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// //   .then(() => {
// //     console.log('Connected to MongoDB');
// //     // On successful connection to MongoDB, populate fallbackStorage
// //     mongoose.connection.on('connected', async () => {
// //       try {
// //         const users = await User.find();
// //         fallbackStorage.users = users.map(user => ({
// //           username: user.username,
// //           email: user.email,
// //           password: user.password,
// //         }));
// //         console.log("Fallback storage initialized with MongoDB data.");
// //       } catch (err) {
// //         console.error("Error syncing MongoDB data to fallback storage:", err);
// //       }
// //     });
// //   })
// //   .catch(err => {
// //     console.log('Error connecting to MongoDB:', err);
// //   });

// // // Start the server
// // const port = process.env.PORT || 5000;
// // app.listen(port, () => console.log(`Server is running on port ${port}`));
// // const express = require("express");
// // const mongoose = require("mongoose");
// // const bcrypt = require("bcryptjs");
// // const jwt = require("jsonwebtoken");
// // const fallbackStorage = require("../utils/fallbackStorage");
// // const User = require("../models/User");

// // const router = express.Router();

// // // Register Route
// // router.post("/register", async (req, res) => {
// //   const { username, email, password } = req.body;

// //   try {
// //     console.log("MongoDB connection state:", mongoose.connection.readyState);
// //     if (mongoose.connection.readyState !== 1) {
// //       // Fallback logic
// //       console.log("MongoDB not connected. Using fallback storage.");

// //       const existingUser = fallbackStorage.users.find(user => user.email === email);
// //       if (existingUser) {
// //         return res.status(400).json({ message: "User already exists (fallback)" });
// //       }

// //       // Hash the password before saving
// //       const hashedPassword = await bcrypt.hash(password, 10);
// //       fallbackStorage.users.push({ username, email, password: hashedPassword });
// //       console.log("User registered in fallback storage:", fallbackStorage.users);

// //       // Save to file after modification
// //       fallbackStorage.saveToFile();

// //       return res.status(201).json({ message: "User registered successfully (fallback)" });
// //     }

// //     // MongoDB logic
// //     const existingUser = await User.findOne({ email });
// //     if (existingUser) {
// //       return res.status(400).json({ message: "User already exists" });
// //     }

// //     const hashedPassword = await bcrypt.hash(password, 10);
// //     const newUser = new User({ username, email, password: hashedPassword });
// //     await newUser.save();

// //     res.status(201).json({ message: "User registered successfully" });
// //   } catch (error) {
// //     console.error("Error during registration:", error);
// //     res.status(500).json({ message: "Internal server error" });
// //   }
// // });

// // // Login Route
// // router.post("/login", async (req, res) => {
// //   const { email, password } = req.body;

// //   try {
// //     console.log("MongoDB connection state:", mongoose.connection.readyState);
// //     if (mongoose.connection.readyState !== 1) {
// //       // Fallback logic
// //       console.log("MongoDB not connected. Using fallback storage.");

// //       const user = fallbackStorage.users.find(user => user.email === email);
// //       if (!user) {
// //         return res.status(400).json({ message: "Invalid credentials (fallback)" });
// //       }

// //       const isPasswordValid = await bcrypt.compare(password, user.password);
// //       if (!isPasswordValid) {
// //         return res.status(400).json({ message: "Invalid credentials (fallback)" });
// //       }

// //       // Generate JWT token
// //       const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
// //       return res.status(200).json({ message: "Login successful (fallback)", token });
// //     }

// //     // MongoDB logic
// //     const user = await User.findOne({ email });
// //     if (!user) {
// //       return res.status(400).json({ message: "Invalid email or password" });
// //     }

// //     const isPasswordValid = await bcrypt.compare(password, user.password);
// //     if (!isPasswordValid) {
// //       return res.status(400).json({ message: "Invalid email or password" });
// //     }

// //     // Generate JWT token
// //     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
// //     res.status(200).json({ message: "Login successful", token });
// //   } catch (error) {
// //     console.error("Error during login:", error);
// //     res.status(500).json({ message: "Internal server error" });
// //   }
// // });

// // module.exports = router;

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const savedItemRoutes = require('./routes/savedItemRoutes'); // Import saved item routes
const contactUsRoutes = require('./routes/contactUsRoutes');
const adminRoutes=require('./routes/adminRoutes');
const profile =require('./routes/profile');
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);  // Authentication routes
app.use('/api/user', userRoutes);  // User-related routes
// app.use('/api/saved-items', savedItemRoutes);  // Saved item routes
app.use('/api', contactUsRoutes);
app.use('/api/saved-items', authRoutes);  
app.use('/api/admin', adminRoutes); 
// app.use('/saved-items',authRoutes);
app.use('/api/saved-items',savedItemRoutes);
app.use('/api/saved-items/details',savedItemRoutes);
// app.use('/profile',authRoutes);

app.use('/api/profile',profile);
// Database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
