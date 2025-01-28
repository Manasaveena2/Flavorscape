// // const express = require("express");
// // const SavedItem = require("../models/SavedItem");
// // const router = express.Router();

// // // Add a saved item
// // router.post("/", async (req, res) => {
// //   const { userId, title, description, imageUrl } = req.body;

// //   try {
// //     const savedItem = new SavedItem({ userId, title, description, imageUrl });
// //     await savedItem.save();
// //     res.status(201).json(savedItem);
// //   } catch (error) {
// //     res.status(400).json({ error: error.message });
// //   }
// // });

// // // Get saved items for a particular user
// // router.get("/:userId", async (req, res) => {
// //   const { userId } = req.params;

// //   try {
// //     const savedItems = await SavedItem.find({ userId });
// //     res.status(200).json(savedItems);
// //   } catch (error) {
// //     res.status(400).json({ error: error.message });
// //   }
// // });

// // module.exports = router;

// // Backend routes for saving items and retrieving them
// const express = require("express");
// const SavedItem = require("../models/SavedItem");
// const router = express.Router();

// // Add a saved item
// router.post("/", async (req, res) => {
//   const { userId, recipeId, title, description, imageUrl } = req.body; // Modified to include recipeId

//   try {
//     const savedItem = new SavedItem({ userId, recipeId, title, description, imageUrl });
//     await savedItem.save();
//     res.status(201).json(savedItem);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // Get saved items for a particular user
// router.get("/:userId", async (req, res) => {
//   const { userId } = req.params;

//   try {
//     const savedItems = await SavedItem.find({ userId });
//     res.status(200).json(savedItems);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// module.exports = router;

// const mongoose = require("mongoose");

// const savedItemSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Ensured userId is required and referenced
//   recipeId: { type: String, required: true }, // Added recipeId to relate saved items to specific recipes
//   title: { type: String, required: true },
//   description: { type: String },
//   imageUrl: { type: String },
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("SavedItem", savedItemSchema);
// backend/routes/savedItemRoutes.js

// const express = require('express');
// const router = express.Router();
// const SavedItem = require('../models/SavedItem');

// // Example route to get all saved items
// router.get('/', async (req, res) => {
//   try {
//     const items = await SavedItem.find();
//     res.json(items);
//   } catch (err) {
//     console.error("Error saving item:", err); 
//     res.status(500).send('Server Error');
//   }
// });

// // Example route to add a new saved item
// router.post('/', async (req, res) => {
//   const { name, category } = req.body;

//   try {
//     const newItem = new SavedItem({ name, category });
//     await newItem.save();
//     res.json(newItem);
//   } catch (err) {
//     console.error("Error saving item:", err); 
//     res.status(500).send('Server Error');
//   }
// });

// module.exports = router;
// const express = require('express');
// const router = express.Router();
// const SavedItem = require('../models/SavedItem');

// // Example route to get all saved items
// router.get('/', async (req, res) => {
//   try {
//     const items = await SavedItem.find();
//     res.json(items);
//   } catch (err) {
//     console.error("Error fetching saved items:", err);
//     res.status(500).send('Server Error');
//   }
// });

// // Example route to add a new saved item
// router.post('/', async (req, res) => {
//   const { userId, recipeId, title, description, imageUrl, name, category } = req.body;

//   try {
//     // Create a new saved item
//     const newItem = new SavedItem({
//       userId,
//       recipeId,
//       title,
//       description,
//       imageUrl,
//       name, // Optional field
//       category, // Optional field
//     });

//     // Save the new item to the database
//     await newItem.save();
//     res.json(newItem);
//   } catch (err) {
//     console.error("Error saving item:", err);
//     res.status(500).send('Server Error');
//   }
// });

// module.exports = router;







// const express = require('express');
// const router = express.Router();
// const SavedItem = require('../models/SavedItem');
// const authid=require('./authRoutes')
// // console.log(authid.user_id);
// const authenticateUser = require('../middleware/authMiddleware'); 
// const authMiddleware = require('../middleware/authMiddleware');
// // const authMiddleware = require('../middleware/authMiddleware');
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
//     const {  userIds,recipeId, title, description, imageUrl, name, category, videoUrl } = req.body;
//     // console.log(userId);

//     // Create a new saved item
//     const newItem = new SavedItem({
//       userId: userIds, 
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
