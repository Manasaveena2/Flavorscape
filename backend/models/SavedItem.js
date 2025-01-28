// const mongoose = require("mongoose");

// const savedItemSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   title: { type: String, required: true },
//   description: { type: String },
//   imageUrl: { type: String },
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("SavedItem", savedItemSchema);
// backend/models/savedItemModel.js

// const mongoose = require('mongoose');

// // Define the schema for the SavedItem model
// const savedItemSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   category: {
//     type: String,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// // Declare SavedItem variable
// let SavedItem;

// // Check if the model already exists to avoid overwriting it
// try {
//   SavedItem = mongoose.model('SavedItem');
// } catch (error) {
//   SavedItem = mongoose.model('SavedItem', savedItemSchema);
// }

// module.exports = SavedItem;
const mongoose = require('mongoose');

const savedItemSchema = new mongoose.Schema({
  userId: { type: String, required: true },
 
  // userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  recipeId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  name: { type: String, required: false }, // Optional field
  category: { type: String, required: false }, // Optional field
  videoUrl: { type: String, required: false }, // Added videoUrl field
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('SavedItem', savedItemSchema);
