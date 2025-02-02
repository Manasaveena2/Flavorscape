import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import "./styles/PopularPage.css";

const PopularPage = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  
  const apiKey = "2cf363e464msh40119dd71827212p1759f2jsn9f2d6345d821"; // Replace with your actual API key

  // Fetch popular recipes
  const fetchPopularRecipes = async () => {
    const query = "number=100&sort=popularity"; // Adjust query for popular recipes
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
      console.error("Error fetching popular recipes:", error);
    }
  };

  useEffect(() => {
    fetchPopularRecipes();
  }, []);

  return (
    <div className="App">
          <button className="back-button" onClick={() => navigate(-1)}>
            <FaArrowLeft className="back-arrow" />
          </button>
          <h2>Tried,tested and loved by many!</h2>
    <div className="popular-page">
      {/* Display Popular Recipes */}
      <div className="recipe-list">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="recipe-card"
              onClick={() => navigate(`/recipe/${recipe.id}`)}
            >
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
            </div>
          ))
        ) : (
          <p>Loading popular recipes...</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default PopularPage;
