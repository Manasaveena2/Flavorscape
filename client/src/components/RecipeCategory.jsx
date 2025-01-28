
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { AllRecipes } from "../data/AllRecipe"; // Import AllRecipes data from AllRecipe.js
import { FaArrowLeft } from "react-icons/fa";

const RecipeCategory = () => {
  const { category } = useParams(); // Get the category from the URL
  const navigate = useNavigate();

  // Filter the recipes based on the category (case-insensitive match)
  const recipes = AllRecipes.filter(
    (recipe) => recipe.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div style={containerStyle}>
      {/* Back button */}
      <button
        style={backButtonStyle}
        onClick={() => navigate(-1)} // Use navigate(-1) to go back
      >
        <FaArrowLeft style={{ marginRight: "8px" }} />
        Back
      </button>

      <h1 style={headerStyle}>{category.toUpperCase()} RECIPIES</h1>
      <p style={subtitleStyle}>
        Here is a list of amazing {category.toLowerCase()} recipes!
      </p>

      <div style={cardContainerStyle}>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe.id} style={cardStyle}>
              <img
                src={`${process.env.PUBLIC_URL}/topstories/${recipe.imgUrl}`}
                alt={recipe.recipeTitle}
                style={imageStyle}
              />
              <h3 style={titleStyle}>{recipe.recipeTitle}</h3>
              <p style={descriptionStyle}>{recipe.recipeDescription}</p>

              {/* Navigate to RecipeDetail page */}
              <Link to={`/recipes/${category.toLowerCase()}/${recipe.id}`}>
                <button style={viewButtonStyle}>View Recipe</button>
              </Link>
            </div>
          ))
        ) : (
          <p style={noRecipesStyle}>No recipes found for {category}.</p>
        )}
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  padding: "20px",
  maxWidth: "1200px",
  margin: "0 auto",
};

const backButtonStyle = {
  display: "flex",
  alignItems: "center",
  padding: "10px 20px",
  background: "#f4f4f4",
  border: "1px solid #ccc",
  borderRadius: "5px",
  fontSize: "16px",
  cursor: "pointer",
  marginBottom: "20px",
};

const headerStyle = {
  fontSize: "28px",
  fontWeight: "bold",
  color: "#333",
  marginBottom: "10px",
  display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const subtitleStyle = {
  fontSize: "18px",
  color: "#666",
  marginBottom: "20px",
  display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const cardContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  justifyContent: "center",
};

const cardStyle = {
  width: "300px",
  padding: "15px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  background: "#fff",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  cursor: "pointer",
};

const imageStyle = {
  width: "100%",
  height: "180px",
  objectFit: "cover",
  borderRadius: "5px",
};

const titleStyle = {
  fontSize: "20px",
  fontWeight: "bold",
  color: "#333",
  margin: "10px 0",
};

const descriptionStyle = {
  fontSize: "14px",
  color: "#555",
  marginBottom: "15px",
};

const viewButtonStyle = {
  padding: "10px 15px",
  background: "#4CAF50",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  fontSize: "14px",
  cursor: "pointer",
  transition: "background 0.3s ease",
};

const noRecipesStyle = {
  fontSize: "18px",
  color: "#666",
};

export default RecipeCategory;
