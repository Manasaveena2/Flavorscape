import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchRecipes } from '../services/randomapi';
import { fetchRecipesByIngredients, fetchFilteredRecipes } from "../services/complexapi";
import "./styles/Welcome.css";

const getTruncatedSummary = (summary) => {
  const cleanSummary = summary.replace(/<\/?[^>]+(>|$)/g, "");
  const sentences = cleanSummary.split('.'); // Split by sentence
  const truncatedSummary = sentences.slice(0, 1).join('.') + (sentences.length > 3 ? '...' : ''); // Limit to 3 sentences
  return truncatedSummary;
};


const Welcome = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const navigate = useNavigate();
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [ingredientQuery, setIngredientQuery] = useState("");
  const [ingredientFilteredRecipes, setIngredientFilteredRecipes] = useState([]);

  const [recipes, setRecipes] = useState([]); // State to store fetched recipes
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    getRecipes(); // Call fetch function when component mounts
  }, []);

  const getRecipes = async () => {
    try {
      const data = await fetchRecipes(); // Fetch recipes using imported function
      setRecipes(data); // Update state with fetched recipes
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setLoading(false);
    }
  };

    useEffect(() => {
      if (ingredientQuery.trim() === "") {
            setIngredientFilteredRecipes([]);
          } else {
            const fetchData = async () => {
              try {
                const results = await fetchRecipesByIngredients(ingredientQuery);
                setIngredientFilteredRecipes(results);
              } catch (error) {
                console.error("Error fetching recipes by ingredients:", error);
              }
            };
            fetchData();
          }
        }, [ingredientQuery]);
        useEffect(() => {
          if (searchQuery.trim() === "") {
            setFilteredRecipes([]);
          } else {
            const fetchData = async () => {
              try {
                const results = await fetchFilteredRecipes(searchQuery);
                setFilteredRecipes(results);
              } catch (error) {
                console.error("Error fetching filtered recipes:", error);
              }
            };
            fetchData();
          }
        }, [searchQuery]);
    

  
  

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => (prev === menu ? null : menu));
  };

  const navigateToCategory = (category) => {
    console.log(category);
    navigate(`/recipes/${category.toLowerCase()}`);
  };
  const navigateToCategory1 = (category) => {
    console.log(category);
    navigate(`/recipes-cuisine/${category.toLowerCase()}`);
  };
  const navigateToCategory2 = (category) => {
    console.log(category);
    navigate(`/recipes-taste/${category.toLowerCase()}`);
  };
  const navigateToCategory3 = (category) => {
    console.log(category);
    navigate(`/recipes-time/${category.toLowerCase()}`);
  };
  const navigateToCategory4 = (category) => {
    console.log(category);
    navigate(`/recipes-diet/${category.toLowerCase()}`);
  };
  const navigateToCategory5 = (category) => {
    console.log(category);
    navigate(`/recipes-popular/${category.toLowerCase()}`);
  };
  const navigateToCategory6 = (category) => {
    console.log(category);
    navigate(`/recipes-seasonal/${category.toLowerCase()}`);
  };
  const navigateToCategory7 = (category) => {
    console.log(category);
    navigate(`/recipes-meal/${category.toLowerCase()}`);
  };

  const navigateToCategory8 = (category) => {
    console.log(category);
    navigate(`/recipes-equipment/${category.toLowerCase()}`);
  };

  const handleRecipeClick = (id) => {
    console.log(id);
    navigate(`/recipe/${id}`);
  };

 

  return (
    <div className="welcome-container">
      {/* Navbar Section */}
      <div className="top-section">
        <div className="top-left">
          <button onClick={() => toggleDropdown("recipes")}>Recipes</button>
          <button onClick={() => toggleDropdown("ingredients")}>Ingredients</button>
          <button onClick={() => toggleDropdown("occasions")}>Occasions</button>
          <button onClick={() => toggleDropdown("kitchengear")}>Kitchen Gear</button>
        </div>
        <div className="top-right">
          <input
            type="search"
            placeholder="Search recipes"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Dropdown Menus */}
      {dropdownOpen === "recipes" && (
        <div className="dropdown">
          <button className="close-btn" onClick={() => setDropdownOpen(null)}>
            &times;
          </button>
          <div>
            <strong>MEALS</strong>
            <button onClick={() => navigateToCategory("breakfast")}>Breakfast</button>
            <button onClick={() => navigateToCategory("lunch")}>Lunch</button>
            <button onClick={() => navigateToCategory("dinner")}>Dinner</button>
            <button onClick={() => navigateToCategory("dessert")}>Dessert</button>
            <button onClick={() => navigateToCategory("drinks")}>Drinks</button>
          </div>
          <div>
            <strong>Flavors & Bites</strong>
             <button onClick={() => navigateToCategory("snacks")}>Snacks</button>
             <button onClick={() => navigateToCategory1("cuisine")}>Cuisine</button>
             <button onClick={() => navigateToCategory2("sweet")}>Taste</button>
           </div>
           <div>
            <strong>Smart Picks</strong>
             <button onClick={() => navigateToCategory3("30")}>Time</button>
             <button onClick={() => navigateToCategory4("diet")}>Diet</button>
           </div>
           <div>
             <strong>Top Picks</strong>
             <button onClick={() => navigateToCategory5("popularity")}>Most Popular</button>
           </div>
         </div>
      )}
      {dropdownOpen === "ingredients" && (
        <div className="dropdown">
          <button className="close-btn" onClick={() => setDropdownOpen(null)}>
            &times;
          </button>
          <div>
            <h3 className="text">From Your Kitchen to the Table: Easy Recipes with What You Have!</h3>
            <div className="input-btn">
            <input
              type="search"
              placeholder="Enter ingredients separated by commas (e.g., eggs, milk)"
              value={ingredientQuery}
              onChange={(e) => setIngredientQuery(e.target.value)}
            />
            </div>
          </div>
        </div>
      )}
       {dropdownOpen === "occasions" && (
        <div className="dropdown">
          <button className="close-btn" onClick={() => setDropdownOpen(null)}>
            &times;
          </button>
          <div>
            <strong>SEASONAL</strong>
            <button onClick={() => navigateToCategory6("summer")}>Summer Recipes</button>
            <button onClick={() => navigateToCategory6("winter")}>Winter Dishes</button>
            <button onClick={() => navigateToCategory6("spring")}>Spring Meals</button>
          </div>
          <div>
            <strong>GATHERINGS</strong>
            <button onClick={() => navigateToCategory6("christmas")}>Christmas</button>
            <button onClick={() => navigateToCategory6("thanksgiving")}>Thanks giving</button>
            <button onClick={() => navigateToCategory6("easter")}>Easter</button>
          </div>
        </div>
      )}

      {dropdownOpen === "kitchengear" && (
        <div className="dropdown">
          <button className="close-btn" onClick={() => setDropdownOpen(null)}>
            &times;
          </button>
          <div>
            <strong>One&Done Meals</strong>
            <button onClick={() => navigateToCategory7("christmas")}>Effortless Eats</button>
          </div>
          <div>
            <strong>Cook By Tool</strong>
            <button onClick={() => navigateToCategory8("christmas")}>Gadget Gourmet</button>
          </div>
        </div>
      )}

      {/* Top Stories Section */}
      <div className="top-stories">
        {ingredientQuery && ingredientFilteredRecipes.length > 0 ? (
          <h2>Recipes Found by Ingredients:</h2>
        ) : searchQuery ? (
          <h2>Search results for "{searchQuery}"</h2>
        ) : (
          <h2>Top Recipes</h2>
        )}

        <div className="stories-container">
          {ingredientQuery && ingredientFilteredRecipes.length > 0 ? (
            ingredientFilteredRecipes.map((recipe) => (
              <div key={recipe.id} className="story-card" onClick={() => handleRecipeClick(recipe.id)}>
                <img src={recipe.image} alt="" style={{ width: "100%", height: "150px", objectFit: "cover" }} />
                <p>{recipe.title}</p>
              </div>
            ))
          ) : searchQuery ? (
            filteredRecipes.length > 0 ? (
              filteredRecipes.map((recipe) => (
                <div key={recipe.id} className="story-card" onClick={() => handleRecipeClick(recipe.id)}>
                  <img src={recipe.image} alt="" style={{ width: "100%", height: "150px", objectFit: "cover" }} />
                  <h3>{recipe.title}</h3>
                  <p>{getTruncatedSummary(recipe.summary)}</p>
                </div>
              ))
            ) : (
              <p>No recipes found for "{searchQuery}".</p>
            )
          ) : (
            recipes.length > 0 ? (
              recipes.map((recipe) => (
                <div key={recipe.id} className="story-card" onClick={() => handleRecipeClick(recipe.id)}>
                  <img src={recipe.image} alt={recipe.title} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
                  <h3>{recipe.title}</h3>
                  <p>{recipe.summary ? getTruncatedSummary(recipe.summary) : "No description available."}</p>
                </div>
              ))
            ) : (
              <p>Loading recipes...</p>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
