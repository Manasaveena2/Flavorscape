const express = require("express");
const router = express.Router();
const SavedItem = require("../models/SavedItem"); // Import your Mongoose model

// POST request to save an item

// Route to save a new item (global access, no auth)
router.post('/', async (req, res) => {
  try {
    const {userId,recipeId,title,imageUrl  } = req.body;

    // Create a new saved item
    // const newItem = new SavedItem({
    //   userId: user_id,
    //   recipeId,
    //   title,
    //   imageUrl,
      
    // });
    const newItem = new SavedItem({
      userId,
      recipeId,
      title,
      imageUrl,
      
    });
    await newItem.save();
    res.status(201).json({ message: 'Recipe saved successfully', newItem });
    console.log(newItem);
  } catch (err) {
    console.error('Error saving item:', err);
    res.status(500).send('Server Error');
  }
});


 router.post('/details', async (req, res) => {
     try {
         const { userId } = req.body;

         if (!userId) {
             return res.status(400).json({ error: "User ID is required" });
         }

         // Fetch saved items from the database for the given user
         const savedItems = await SavedItem.find({ userId });

         res.status(200).json(savedItems);
     } catch (error) {
         console.error("Error fetching saved items:", error);
         res.status(500).json({ error: "Internal Server Error" });
     }
 });

module.exports = router;

