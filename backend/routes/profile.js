const express = require("express");
const router = express.Router();
const User = require("../models/User"); // Import User model

// GET user profile by userId
router.get("/:userId", async (req, res) => {
    try {
        const { userId } = req.params;

        // Find user in the database
        const user = await User.findById(userId).select("-password"); // Exclude password for security

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching user profile:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
