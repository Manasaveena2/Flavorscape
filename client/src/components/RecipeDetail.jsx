

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AllRecipes } from "../data/AllRecipe"; // Ensure this path is correct

import { FaFacebookF, FaTwitter, FaPinterestP, FaWhatsapp, FaArrowLeft } from "react-icons/fa";
import axios from "axios"; // Import axios to make API requests
import { useAuth } from "../context/AuthContext"; // To get the current user's authentication status

import "./styles/RecipeDetail.css"; // Import styles

const RecipeDetail = () => {
  const { id } = useParams(); // Get the ID from the URL
  const recipe = AllRecipes.find((r) => r.id === parseInt(id)); // Find recipe by ID
  const [isSaved, setIsSaved] = useState(false); // Track if the recipe is saved
  const navigate = useNavigate();
  const { user } = useAuth(); // Get the authenticated user from context

  // If no recipe is found, show an error message
  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  // Handle saving the recipe to the database (via API)
  const handleSaveRecipe = async () => {
    // console.log('User object:', user);
// console.log('User ID:', user.id);
const userId = localStorage.getItem('userId');
console.log(user);
    if (!user) {  // Ensure the user is authenticated before saving
      alert("You need to be logged in to save a recipe");
      return;
    }
    

    try {
      // Send the POST request to save the recipe
      
      const response = await axios.post("http://localhost:5000/api/saved-items\\", { // Ensure the correct backend URL
        // userId: userId, // Pass the user's id
        recipeId: recipe.id, // Pass the recipe's id (modified to use id from AllRecipes)
        title: recipe.recipeTitle, // Send the recipe title as well
        description: recipe.recipeDescription, // Send the recipe description
        imageUrl: recipe.imgUrl, // Send the recipe image URL
        name: recipe.recipeTitle,  // Ensure name is included
  videoUrl:recipe.videoUrl
      });

      if (response.status === 201) {
        setIsSaved(true); // Update state to reflect that the recipe is saved
        alert("Recipe saved successfully");
      }
    } catch (error) {
      console.error("Error saving recipe:", error);
      alert("Error saving recipe");
    }
  };

  // Social media sharing functionality
  const shareOnSocialMedia = (platform) => {
    const url = window.location.href; // Current recipe page URL
    const title = recipe.recipeTitle;
    const image = recipe.imgUrl; // image to be shared

    switch (platform) {
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${url}`,
          "_blank"
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
          "_blank"
        );
        break;
      case "pinterest":
        window.open(
          `https://www.pinterest.com/pin/create/button/?url=${url}&media=${image}&description=${title}`,
          "_blank"
        );
        break;
      case "whatsapp":
        window.open(
          `https://wa.me/?text=${title} - ${url}`,
          "_blank"
        );
        break;
      default:
        break;
    }
  };

  // Split preparation steps into an array
  const preparationSteps = recipe.preparationDescription
    .split("\n") // Split by newline character
    .map((step) => step.trim()) // Trim extra spaces around each step
    .filter((step) => step.length > 0);

  return (
    <div className="recipe-detail-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft className="back-arrow" />
        Back
      </button>
      <h1 className="recipe-title">{recipe.recipeTitle}</h1>
      <img
        src={`${process.env.PUBLIC_URL}/topstories/${recipe.imgUrl}`} // Make sure imgUrl is properly stored in your assets folder
        alt={recipe.recipeTitle}
        className="recipe-image"
      />
      <p className="recipe-description">
        <strong>Description:</strong> {recipe.recipeDescription}
      </p>
      {/* <p className="category">
        <strong>Category:</strong> {recipe.category}
      </p> */}
      <div>
  <a href={recipe.videoUrl} target="_blank" rel="noopener noreferrer">
    Watch Video
  </a>
</div>

      <h3>Preparation Steps:</h3>
      <div className="preparation-steps">
        {preparationSteps.map((step, index) => (
          <p key={index}>{step}</p>
        ))}
      </div>
      <h3>Diet Details:</h3>
      <ul className="diet-details">
        {recipe.dietDetails.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <h3>Nutritional Information (Per {recipe.nutritionalInformation.servingSize}):</h3>
      <ul className="nutritional-info">
        {Object.entries(recipe.nutritionalInformation).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> <span>{value}</span>
          </li>
        ))}
      </ul>

      {/* Social media share buttons */}
      <div className="social-share-buttons">
        <button onClick={() => shareOnSocialMedia("facebook")}>
          <FaFacebookF className="social-icon" />
        </button>
        <button onClick={() => shareOnSocialMedia("twitter")}>
          <FaTwitter className="social-icon" />
        </button>
        <button onClick={() => shareOnSocialMedia("pinterest")}>
          <FaPinterestP className="social-icon" />
        </button>
        <button onClick={() => shareOnSocialMedia("whatsapp")}>
          <FaWhatsapp className="social-icon" />
        </button>
      </div>

      {/* Save button */}
      <div>
        <button
          onClick={handleSaveRecipe} // Call the function to save the recipe
          style={{ backgroundColor: isSaved ? "gray" : "#2a9d8f" }}
          disabled={isSaved}
        >
          {isSaved ? "Recipe Saved" : "Save Recipe"}
        </button>
      </div>
    </div>
  );
};

export default RecipeDetail;











