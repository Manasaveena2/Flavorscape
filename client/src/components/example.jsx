import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchRecipes } from "../services/randomapi";
import { fetchRecipesByIngredients, fetchFilteredRecipes } from "../services/complexapi";
import "./styles/Welcome.css";

const Welcome = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [ingredientQuery, setIngredientQuery] = useState("");
  const [displayedRecipes, setDisplayedRecipes] = useState([]);  // ✅ Unified state for displayed recipes
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    try {
      const data = await fetchRecipes();
      setDisplayedRecipes(data);  // ✅ Use displayedRecipes instead of `recipes`
      setLoading(false);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (ingredientQuery.trim() !== "") {
        try {
          const results = await fetchRecipesByIngredients(ingredientQuery);
          setDisplayedRecipes(results);  // ✅ Update displayed recipes
        } catch (error) {
          console.error("Error fetching recipes by ingredients:", error);
        }
      } else if (searchQuery.trim() !== "") {
        try {
          const results = await fetchFilteredRecipes(searchQuery);
          setDisplayedRecipes(results);  // ✅ Update displayed recipes
        } catch (error) {
          console.error("Error fetching filtered recipes:", error);
        }
      } else {
        getRecipes(); // Fallback to top recipes
      }
    };

    fetchData();
  }, [ingredientQuery, searchQuery]);  // ✅ Only fetch when queries change

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => (prev === menu ? null : menu));
  };

  const handleRecipeClick = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div className="welcome-container">
      <div className="top-section">
        <div className="top-left">
          <button onClick={() => toggleDropdown("recipes")}>Recipes</button>
          <button onClick={() => toggleDropdown("ingredients")}>Ingredients</button>
        </div>
        <div className="top-right">
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {dropdownOpen === "ingredients" && (
        <div className="dropdown">
          <button className="close-btn" onClick={() => setDropdownOpen(null)}>&times;</button>
          <h3>Find Recipes By Ingredients</h3>
          <input
            type="text"
            placeholder="Enter ingredients (e.g., eggs, milk)"
            value={ingredientQuery}
            onChange={(e) => setIngredientQuery(e.target.value)}
          />
        </div>
      )}

      <div className="top-stories">
        <h2>
          {ingredientQuery
            ? "Recipes Found by Ingredients:"
            : searchQuery
            ? `Search results for "${searchQuery}"`
            : "Top Recipes"}
        </h2>

        <div className="stories-container">
          {loading ? (
            <p>Loading recipes...</p>
          ) : displayedRecipes.length > 0 ? (
            displayedRecipes.map((recipe) => (
              <div key={recipe.id} className="story-card" onClick={() => handleRecipeClick(recipe.id)}>
                <img src={recipe.image} alt={recipe.title} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
                <h3>{recipe.title}</h3>
                <p>{recipe.summary ? getTruncatedSummary(recipe.summary) : "No description available."}</p>
              </div>
            ))
          ) : (
            <p>No recipes found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
