// // server/utils/fallbackStorage.js

// module.exports = {
//     users: [], // Initialize with an empty array or prepopulate with test users for fallback
//   };
// const fs = require("fs");
// const path = require("path");

// // Define the path to store the fallback data
// const fallbackFilePath = path.join(__dirname, "fallbackData.json");

// const fallbackStorage = {
//   users: [],

//   // Load users from file if the file exists
//   loadFromFile() {
//     if (fs.existsSync(fallbackFilePath)) {
//       try {
//         const data = fs.readFileSync(fallbackFilePath, "utf-8");
//         this.users = JSON.parse(data);
//         console.log("Fallback data loaded from file.");
//       } catch (err) {
//         console.error("Error loading fallback data from file:", err);
//       }
//     }
//   },

//   // Save the current users data to the file
//   saveToFile() {
//     try {
//       fs.writeFileSync(fallbackFilePath, JSON.stringify(this.users, null, 2));
//       console.log("Fallback data saved to file.");
//     } catch (err) {
//       console.error("Error saving fallback data to file:", err);
//     }
//   },
// };

// // Load fallback storage data on startup
// fallbackStorage.loadFromFile();

// module.exports = fallbackStorage;
// const fs = require("fs");
// const path = require("path");

// // Define the path to store the fallback data
// const fallbackFilePath = path.join(__dirname, "fallbackData.json");

// const fallbackStorage = {
//   users: [],

//   // Load users from file if the file exists
//   loadFromFile() {
//     if (fs.existsSync(fallbackFilePath)) {
//       try {
//         const data = fs.readFileSync(fallbackFilePath, "utf-8");
//         this.users = JSON.parse(data);
//         console.log("Fallback data loaded from file.");
//       } catch (err) {
//         console.error("Error loading fallback data from file:", err);
//       }
//     }
//   },

//   // Save the current users data to the file
//   saveToFile() {
//     try {
//       fs.writeFileSync(fallbackFilePath, JSON.stringify(this.users, null, 2));
//       console.log("Fallback data saved to file.");
//     } catch (err) {
//       console.error("Error saving fallback data to file:", err);
//     }
//   },
// };

// // Load fallback storage data on startup
// fallbackStorage.loadFromFile();

// module.exports = fallbackStorage;
const fs = require("fs");
const path = require("path");

// Define the path to store the fallback data
const fallbackFilePath = path.join(__dirname, "fallbackData.json");

const fallbackStorage = {
  users: [],

  // Load users from file if the file exists
  loadFromFile() {
    if (fs.existsSync(fallbackFilePath)) {
      try {
        const data = fs.readFileSync(fallbackFilePath, "utf-8");
        this.users = JSON.parse(data);
        console.log("Fallback data loaded from file.");
      } catch (err) {
        console.error("Error loading fallback data from file:", err);
      }
    }
  },

  // Save the current users data to the file
  saveToFile() {
    try {
      fs.writeFileSync(fallbackFilePath, JSON.stringify(this.users, null, 2));
      console.log("Fallback data saved to file.");
    } catch (err) {
      console.error("Error saving fallback data to file:", err);
    }
  },
};

// Load fallback storage data on startup
fallbackStorage.loadFromFile();

module.exports = fallbackStorage;
