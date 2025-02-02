import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import "./styles/DietPage.css";

const DietPage = () => {
  const navigate = useNavigate();
  const [selectedDiet, setSelectedDiet] = useState(null);
  const [recipes, setRecipes] = useState([]);

  const apiKey = "2cf363e464msh40119dd71827212p1759f2jsn9f2d6345d821"; // Replace with your actual API key

  // Diet options
  const dietOptions = [
    { name: "Weight Loss", maxCalories: 300, maxCarbs: 20, maxProtein: 20, maxFat: 5 },
    { name: "Muscle Gain", maxCalories: 450, maxCarbs: 30, maxProtein: 35, maxFat: 10 },
    { name: "Keto Diet", maxCalories: 700, maxCarbs: 40, maxProtein: 50, maxFat: 12 },
    { name: "Balanced Diet", maxCalories: 800, maxCarbs: 55, maxProtein: 80, maxFat: 15 }
  ];

  // Fetch recipes based on selected diet
  const fetchRecipes = async (diet) => {
    setSelectedDiet(diet);
    let query = `addRecipeNutrition=true&number=100&maxCalories=${diet.maxCalories}&maxCarbs=${diet.maxCarbs}&maxProtein=${diet.maxProtein}&maxFat=${diet.maxFat}`;
    console.log(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?${query}`)
    try {
      const response = await axios.get(
        `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?${query}`,
        {
          headers: {
            "x-rapidapi-key": apiKey,
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
          }
        }
      );
      setRecipes(response.data.results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    fetchRecipes(dietOptions[0]); // Load Weight Loss recipes initially
  }, []);

  return (
    <div className="p-4">
        <button className="back-button" onClick={() => navigate(-1)}>
                <FaArrowLeft className="back-arrow" />
              </button>
    
    <div className="diet-page">
        
      <h2>Nourish Your Body: Recipes Tailored to You!</h2>

      {/* Display Diet Categories */}
      <div className="diet-options">
        {dietOptions.map((diet, index) => (
          <button
            key={index}
            className={`diet-btn ${selectedDiet?.name === diet.name ? "active" : ""}`}
            onClick={() => fetchRecipes(diet)}
          >
            {diet.name}
          </button>
        ))}
      </div>

      {/* Display Recipes */}
      <div className="recipe-list">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card" onClick={() => navigate(`/recipe/${recipe.id}`)}>
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
            </div>
          ))
        ) : selectedDiet ? (
          <p>Loading recipes...</p>
        ) : (
          <p>Select a diet to see recipes</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default DietPage;
