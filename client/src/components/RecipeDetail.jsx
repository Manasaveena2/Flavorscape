
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; 
import axios from 'axios';
import { FaFacebookF, FaTwitter, FaPinterestP, FaWhatsapp, FaArrowLeft,FaHeart, FaBookmark, } from "react-icons/fa";
import "./styles/RecipeDetail.css"

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);
  const [nutrition, setNutrition] = useState(null);
  const [isSaved, setIsSaved] = useState(false); 
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const { user } = useAuth(); // Get the authenticated user from context

  const apiKey = '2cf363e464msh40119dd71827212p1759f2jsn9f2d6345d821'; // Replace with your API key

  // Fetch the recipe details
  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const recipeResponse = await axios.get(
          `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`,
          {
            headers: {
              'x-rapidapi-key': apiKey,
              'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
            },
          }
        );

        const nutritionResponse = await axios.get(
          `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/nutritionWidget.json`,
          {
            headers: {
              'x-rapidapi-key': apiKey,
              'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
            },
          }
        );

        setRecipe(recipeResponse.data);
        setNutrition(nutritionResponse.data);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      }
    };
    fetchRecipeDetails();
  }, [id]);

  if (!recipe) {
    return <p>Loading...</p>;
  }
  const handleSaveRecipe = async () => {
        console.log('User object:', user);
    // console.log('User ID:', );
    // const userId = localStorage.getItem('userId');

    console.log(user.user.email);

    console.log("user id is ",user.user._id);
    const userId=user.user._id;
    // console.log("user id is ",userId);
    console.log(user);
        if (!user) {  // Ensure the user is authenticated before saving
          alert("You need to be logged in to save a recipe");
          return;
        }
        
    
        try {
          // Send the POST request to save the recipe
 // Get userId from authenticated user
    console.log("User ID being sent is:",
       userId); // Debugging log

          const response = await axios.post("http://localhost:5000/api/saved-items/", { // Ensure the correct backend URL
              // Pass the user's id
              userId:userId,
             recipeId: recipe.id, // Pass the recipe's id (modified to use id from AllRecipes)
            title: recipe.title, // Send the recipe title as well
    //       description: recipe.recipeDescription, // Send the recipe description
           imageUrl: recipe.image, // Send the recipe image URL
    //         name: recipe.recipeTitle,  // Ensure name is included
    //   videoUrl:recipe.videoUrl
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
      const handleLikeRecipe = () => {
        setIsLiked(!isLiked); // Toggle the like status
        alert(isLiked ? "You unliked this recipe" : "You liked this recipe");
      };
      return (
        <div className='p-4'>
          <div className='but'>
             <button className="back-button" onClick={() => navigate(-1)}>
               <FaArrowLeft className="back-arrow" />
             </button>
              <div className="top-right-icons">
                 <button onClick={handleLikeRecipe} className="like-button">
                   <FaHeart style={{ color: isLiked ? 'red' : '#ccc' }} />
                </button>
                <button className={`save-button ${isSaved ? "saved" : ""}`} onClick={handleSaveRecipe} disabled={isSaved}>
                   <FaBookmark/>
                </button>
              </div>
          </div>
        
      

        <div className="recipe-detail-container">
          <h2 className="recipe-title">{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      
          {/* Horizontal Grid for Details */}
          <div className="recipe-info-container">
            {/* Column 1: Preparation & Servings */}
            <div className="info-box">
              <h3>Details</h3>
              <p><strong>Preparation Time:</strong> {recipe.readyInMinutes} minutes</p>
              <p><strong>Servings:</strong> {recipe.servings}</p>
            </div>
      
            {/* Column 2: Ingredients */}
            <div className="info-box">
              <h3>Ingredients</h3>
              <ul>
                {recipe.extendedIngredients.map((ingredient) => (
                  <li key={ingredient.id}>{ingredient.original}</li>
                ))}
              </ul>
            </div>
      
            {/* Column 3: Instructions */}
            <div className="info-box">
              <h3>Instructions</h3>
              <p>
                {recipe.instructions ? recipe.instructions.replace(/<\/?[^>]+(>|$)/g, "") : "No instructions available"}
              </p>
            </div>
      
            {/* Column 4: Nutrition Info */}
            <div className="info-box">
              <h3>Nutritional Information</h3>
              <ul>
                {nutrition?.nutrients?.map((nutrient) => (
                  <li key={nutrient.name}>
                    <strong>{nutrient.name}:</strong> {nutrient.amount} {nutrient.unit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
      
          <div className="social-share-buttons">
    <button onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, "_blank")}>
          <FaFacebookF className="facebook-btn" />
         </button>
         <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${recipe.title}&url=${window.location.href}`, "_blank")}>
           <FaTwitter className="twitter-btn" />
         </button>
         <button onClick={() => window.open(`https://www.pinterest.com/pin/create/button/?url=${window.location.href}&media=${recipe.image}&description=${recipe.title}`, "_blank")}>
           <FaPinterestP className="pinterest-btn" />
         </button>
         <button onClick={() => window.open(`https://wa.me/?text=${recipe.title} - ${window.location.href}`, "_blank")}>
           <FaWhatsapp className="whatsapp-btn" />
         </button>
       </div>
         
        </div>
        </div>
      );
      
};

export default RecipeDetail;
