const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Ensure bcryptjs is installed

// Create a schema for the Admin model
const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,  // Ensure the username is unique
  },
  password: {
    type: String,
    required: true,
  },
});

// Hash the password before saving the admin to the database
adminSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();  // Skip hashing if password is not modified
  this.password = await bcrypt.hash(this.password, 10);  // Hash the password with a salt round of 10
  next();
});

// Compare the input password with the hashed password in the database
adminSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);  // Compare input password with stored hashed password
};

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
