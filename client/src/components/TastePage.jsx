import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { FaArrowLeft } from "react-icons/fa";
import axios from 'axios';
import "./styles/RecipeCategory.css";

const TastePage = () => {
  const { category } = useParams();
  const navigate = useNavigate(); // Hook to navigate to the recipe detail page
  const [recipes, setRecipes] = useState([]);
  const [carbs, setCarbs] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fats, setFats] = useState(0);
  const [time, setTime] = useState('');
  const [selectedTaste, setSelectedTaste] = useState('sweet'); // Default cuisine is set to 'Indian'
  
  const apiKey = '2cf363e464msh40119dd71827212p1759f2jsn9f2d6345d821'; // Replace with your API key
  const apiUrl = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${category}&addRecipeNutrition=true&number=100`;

  // Handle cuisine selection from the dropdown
  const handleTasteChange = (event) => {
    setSelectedTaste(event.target.value);
  };

  // Fetch the recipes when the component mounts
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
          },
        });
        setRecipes(response.data.results);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };
    fetchRecipes();
  }, [category]);

  // Handle search functionality with filter
  const handleSearch = () => {
    // Dynamically build the query string based on non-zero values
    let queryParams = [];

    // Include each parameter only if it has a valid value (not 0)
    if (carbs > 0) queryParams.push(`maxCarbs=${carbs}`);
    if (protein > 0) queryParams.push(`maxProtein=${protein}`);
    if (fats > 0) queryParams.push(`maxFat=${fats}`);
    if (time > 0) queryParams.push(`maxReadyTime=${time}`);
    if (selectedTaste.trim() !== '') queryParams.push(`query=${encodeURIComponent(selectedTaste)}`);

    const queryString = queryParams.length > 0 ? `&${queryParams.join('&')}` : '';

    // Fetch the recipes from the API
    const fetchFilteredRecipes = async () => {
      try {
        const response = await axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?number=100&addRecipeNutrition=true${queryString}`, {
          headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
          },
        });
        setRecipes(response.data.results);
      } catch (error) {
        console.error('Error fetching filtered recipes:', error);
      }
    };
    fetchFilteredRecipes();
  };

  return (
    <div className="App">
      <button className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft className="back-arrow" />
      </button>

      <div className="recipe-search-container">
        <h2 className="recipe-search-title">Flavors Unleashed: From Spicy to Sweet!</h2>

        {/* Cuisine Dropdown */}
    

        {/* Nutrient Control Section */}
        <div className="nutrient-control-container">
          <div className="nutrient-control">
            <span>Carbohydrates:</span>
            <button onClick={() => setCarbs(carbs - 5)} className="nutrient-btn">-</button>
            <span>{carbs}</span>
            <button onClick={() => setCarbs(carbs + 5)} className="nutrient-btn">+</button>
          </div>

          <div className="nutrient-control">
            <span>Protein:</span>
            <button onClick={() => setProtein(protein - 5)} className="nutrient-btn">-</button>
            <span>{protein}</span>
            <button onClick={() => setProtein(protein + 5)} className="nutrient-btn">+</button>
          </div>

          <div className="nutrient-control">
            <span>Fats:</span>
            <button onClick={() => setFats(fats - 5)} className="nutrient-btn">-</button>
            <span>{fats}</span>
            <button onClick={() => setFats(fats + 5)} className="nutrient-btn">+</button>
          </div>
        </div>

        {/* Max Time Input */}
        <div class="d-flex flex-row">
        <div className="input-container">
          <div className="flex items-center space-x-2">
            <span>Max Time (mins):</span>
            <input 
              type="number" 
              onChange={(e) => setTime(e.target.value)} 
              className="input-field" 
            />
          </div>
        </div>

        <div className="dropdown-container">
          <label htmlFor="taste" className="dropdown-label">Select Taste:</label>
          <select 
            id="taste" 
            value={selectedTaste} 
            onChange={handleTasteChange} 
            className="dropdown"
          >
            
            <option value="sweet">Sweet</option>
            <option value="spicy">Spicy</option>
            <option value="salty">Salty</option>
            <option value="sour">Sour</option>
            <option value="bitter">Bitter</option>
            <option value="umami">Umami</option>
          </select>
        </div>
        </div>

        {/* Search Button */}
        <button onClick={handleSearch} className="search-btn">
          Search
        </button>
      </div>

      {/* Recipe List */}
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="recipe-card"
            onClick={() => navigate(`/recipe/${recipe.id}`)} // Navigate to the recipe detail page
          >
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            <p>
              <strong>Calories:</strong> {recipe.nutrition?.nutrients?.find((n) => n.name === 'Calories')?.amount || 'N/A'} kcal
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TastePage;
