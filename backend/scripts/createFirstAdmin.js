// backend/scripts/createFirstAdmin.js

const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const Admin = require('../models/Admin');  // Adjust path if needed

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/recipeApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  // Hash the password
  const hashedPassword = await bcrypt.hash('Flavourscape@123', 10);

  // Create the first admin
  const admin = new Admin({
    username: 'flavourscape@gmail.com',
    password: hashedPassword,
  });

  // Save the admin to the database
  await admin.save();
  console.log('First admin created');
  mongoose.connection.close();
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
  mongoose.connection.close();
});