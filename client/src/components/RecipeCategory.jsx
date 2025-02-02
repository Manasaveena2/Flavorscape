
// import React from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import { AllRecipes } from "../data/AllRecipe"; // Import AllRecipes data from AllRecipe.js
// import { FaArrowLeft } from "react-icons/fa";

// const RecipeCategory = () => {
//   const { category } = useParams(); // Get the category from the URL
//   const navigate = useNavigate();

//   // Filter the recipes based on the category (case-insensitive match)
//   const recipes = AllRecipes.filter(
//     (recipe) => recipe.category.toLowerCase() === category.toLowerCase()
//   );

//   return (
//     <div style={containerStyle}>
//       {/* Back button */}
//       <button
//         style={backButtonStyle}
//         onClick={() => navigate(-1)} // Use navigate(-1) to go back
//       >
//         <FaArrowLeft style={{ marginRight: "8px" }} />
//         Back
//       </button>

//       <h1 style={headerStyle}>{category.toUpperCase()} RECIPIES</h1>
//       <p style={subtitleStyle}>
//         Here is a list of amazing {category.toLowerCase()} recipes!
//       </p>

//       <div style={cardContainerStyle}>
//         {recipes.length > 0 ? (
//           recipes.map((recipe) => (
//             <div key={recipe.id} style={cardStyle}>
//               <img
//                 src={`${process.env.PUBLIC_URL}/topstories/${recipe.imgUrl}`}
//                 alt={recipe.recipeTitle}
//                 style={imageStyle}
//               />
//               <h3 style={titleStyle}>{recipe.recipeTitle}</h3>
//               <p style={descriptionStyle}>{recipe.recipeDescription}</p>

//               {/* Navigate to RecipeDetail page */}
//               <Link to={`/recipes/${category.toLowerCase()}/${recipe.id}`}>
//                 <button style={viewButtonStyle}>View Recipe</button>
//               </Link>
//             </div>
//           ))
//         ) : (
//           <p style={noRecipesStyle}>No recipes found for {category}.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// // Styles
// const containerStyle = {
//   padding: "20px",
//   maxWidth: "1200px",
//   margin: "0 auto",
// };

// const backButtonStyle = {
//   display: "flex",
//   alignItems: "center",
//   padding: "10px 20px",
//   background: "#f4f4f4",
//   border: "1px solid #ccc",
//   borderRadius: "5px",
//   fontSize: "16px",
//   cursor: "pointer",
//   marginBottom: "20px",
// };

// const headerStyle = {
//   fontSize: "28px",
//   fontWeight: "bold",
//   color: "#333",
//   marginBottom: "10px",
//   display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
// };

// const subtitleStyle = {
//   fontSize: "18px",
//   color: "#666",
//   marginBottom: "20px",
//   display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
// };

// const cardContainerStyle = {
//   display: "flex",
//   flexWrap: "wrap",
//   gap: "20px",
//   justifyContent: "center",
// };

// const cardStyle = {
//   width: "300px",
//   padding: "15px",
//   border: "1px solid #ddd",
//   borderRadius: "8px",
//   boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//   textAlign: "center",
//   background: "#fff",
//   transition: "transform 0.2s ease, box-shadow 0.2s ease",
//   cursor: "pointer",
// };

// const imageStyle = {
//   width: "100%",
//   height: "180px",
//   objectFit: "cover",
//   borderRadius: "5px",
// };

// const titleStyle = {
//   fontSize: "20px",
//   fontWeight: "bold",
//   color: "#333",
//   margin: "10px 0",
// };

// const descriptionStyle = {
//   fontSize: "14px",
//   color: "#555",
//   marginBottom: "15px",
// };

// const viewButtonStyle = {
//   padding: "10px 15px",
//   background: "#4CAF50",
//   color: "#fff",
//   border: "none",
//   borderRadius: "5px",
//   fontSize: "14px",
//   cursor: "pointer",
//   transition: "background 0.3s ease",
// };

// const noRecipesStyle = {
//   fontSize: "18px",
//   color: "#666",
// };

// export default RecipeCategory;



// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// import axios from 'axios';

// const RecipeCategory= () => {
//   const { category } = useParams();
//   console.log(category);
//   const [recipes, setRecipes] = useState([]);
//   const [selectedRecipe, setSelectedRecipe] = useState(null);

//   const apiKey = '2cf363e464msh40119dd71827212p1759f2jsn9f2d6345d821'; // Replace with your API key
//   const apiUrl = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?tags=${category}&addRecipeNutrition=true&number=50`;

//   // Fetch the recipes when the component mounts
//   useEffect(() => {
//     const fetchRecipes = async () => {
//       try {
//         const response = await axios.get(apiUrl, {
//           headers: {
//             'x-rapidapi-key': '2cf363e464msh40119dd71827212p1759f2jsn9f2d6345d821',
//             'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
//           },
//         });
//         setRecipes(response.data.results);
//       } catch (error) {
//         console.error('Error fetching recipes:', error);
//       }
//     };
//     fetchRecipes();
//   }, [category]);

//   // Fetch detailed recipe info when a card is clicked
//   const fetchRecipeDetails = async (recipeId) => {
//     try {
//       const recipeResponse = await axios.get(
//         `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/information`,
//         {
//           headers: {
//             'x-rapidapi-key': '2cf363e464msh40119dd71827212p1759f2jsn9f2d6345d821',
//             'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
//           },
//         }
//       );
//       const nutritionResponse = await axios.get(
//         `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/nutritionWidget.json`,
//         {
//           headers: {
//             'x-rapidapi-key': apiKey,
//             'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
//           },
//         }
//       );
//       setSelectedRecipe({ recipe: recipeResponse.data, nutritionData: nutritionResponse.data });
//     } catch (error) {
//       console.error('Error fetching recipe details:', error);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Recipe Finder</h1>

//       {/* Recipe List */}
//       <div className="recipe-list">
//         {recipes.map((recipe) => (
//           <div
//             key={recipe.id}
//             className="recipe-card"
//             onClick={() => fetchRecipeDetails(recipe.id)}
//           >
//             <img src={recipe.image} alt={recipe.title} />
//             <h3>{recipe.title}</h3>
//             <p>
//               <strong>Calories:</strong> {recipe.nutrition?.nutrients?.find((n) => n.name === 'Calories')?.amount || 'N/A'} kcal
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Recipe Details */}
//       {selectedRecipe && (
//         <div id="recipe-details">
//           <h2>{selectedRecipe.recipe.title}</h2>
//           <img
//             src={selectedRecipe.recipe.image}
//             alt={selectedRecipe.recipe.title}
//             style={{ width: '200px', height: '150px', objectFit: 'cover' }}
//           />
//           <p><strong>Preparation Time:</strong> {selectedRecipe.recipe.readyInMinutes} minutes</p>
//           <p><strong>Recipe Type:</strong> {selectedRecipe.recipe.dishTypes?.join(", ") || "Not specified"}</p>


//           <h3>Ingredients</h3>
//           <ul>
//             {selectedRecipe.recipe.extendedIngredients.map((ingredient) => (
//               <li key={ingredient.id}>{ingredient.original}</li>
//             ))}
//           </ul>

//           <p><strong>Instructions:</strong> {selectedRecipe.recipe.instructions}</p>

//           <h4>Nutritional Information</h4>
//           <ul>
//             {selectedRecipe.nutritionData.nutrients.map((nutrient) => (
//               <li key={nutrient.name}>
//                 <strong>{nutrient.name}:</strong> {nutrient.amount} {nutrient.unit}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RecipeCategory;


// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
// import {  FaArrowLeft } from "react-icons/fa";
// import axios from 'axios';
// import "./styles/RecipeCategory.css"

// const RecipeCategory = () => {
//   const { category } = useParams();
//   const navigate = useNavigate(); // Hook to navigate to the recipe detail page
//   const [recipes, setRecipes] = useState([]);
//   const [carbs, setCarbs] = useState(0);
//   const [protein, setProtein] = useState(0);
//   const [fats, setFats] = useState(0);
//   const [time, setTime] = useState('');
//   const [recipeName, setRecipeName] = useState('');
  

//   const apiKey = '2cf363e464msh40119dd71827212p1759f2jsn9f2d6345d821'; // Replace with your API key
//   const apiUrl = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${category}&addRecipeNutrition=true&number=50`;

//   // Fetch the recipes when the component mounts
//   const increment = (setter, value) => setter(value + 1);
//   const decrement = (setter, value) => setter(value > 0 ? value - 1 : 0);

//   // Handle search functionality
//   const handleSearch = () => {
//     // Implement the search logic and update the recipes list
//     console.log('Search for recipes with filters:', {
//       carbs, protein, fats, time, recipeName
//     });
//   };

//   useEffect(() => {
//     const fetchRecipes = async () => {
//       try {
//         const response = await axios.get(apiUrl, {
//           headers: {
//             'x-rapidapi-key': apiKey,
//             'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
//           },
//         });
//         setRecipes(response.data.results);
//       } catch (error) {
//         console.error('Error fetching recipes:', error);
//       }
//     };
//     fetchRecipes();
//   }, [category]);

//   // Handle click on recipe to navigate to the detail page
//   const handleRecipeClick = (recipeId) => {
//     navigate(`/recipe/${recipeId}`);
//   };
  

//   return (
//     <div className="App">
//       <button className="back-button" onClick={() => navigate(-1)}>
//                <FaArrowLeft className="back-arrow" />
//              </button>
//       <div className="recipe-search-container">
//     <h2 className="recipe-search-title">Recipe Search</h2>

//     {/* Nutrient Control Section */}
//     <div className="nutrient-control-container">
//         <div className="nutrient-control">
//             <span>Carbohydrates:</span>
//             <button onClick={() => decrement(setCarbs, carbs)} className="nutrient-btn">-</button>
//             <span>{carbs}</span>
//             <button onClick={() => increment(setCarbs, carbs)} className="nutrient-btn">+</button>
//         </div>

//         <div className="nutrient-control">
//             <span>Protein:</span>
//             <button onClick={() => decrement(setProtein, protein)} className="nutrient-btn">-</button>
//             <span>{protein}</span>
//             <button onClick={() => increment(setProtein, protein)} className="nutrient-btn">+</button>
//         </div>

//         <div className="nutrient-control">
//             <span>Fats:</span>
//             <button onClick={() => decrement(setFats, fats)} className="nutrient-btn">-</button>
//             <span>{fats}</span>
//             <button onClick={() => increment(setFats, fats)} className="nutrient-btn">+</button>
//         </div>
//     </div>

//     {/* Input Fields for Max Time and Recipe Name */}
//     <div className="input-container">
//         <div className="flex items-center space-x-2">
//             <span>Max Time (mins):</span>
//             <input
//                 type="number"
//                 onChange={(e) => setTime(e.target.value)}
//                 className="input-field"
//             />
//         </div>

//         <div className="flex items-center space-x-2">
//             <span>Recipe Name:</span>
//             <input
//                 type="text"
//                 value={recipeName}
//                 onChange={(e) => setRecipeName(e.target.value)}
//                 placeholder="Enter recipe name"
//                 className="input-field"
//             />
//         </div>
//     </div>

//     {/* Search Button */}
//     <button onClick={handleSearch} className="search-btn">
//         Search
//     </button>
// </div>


//       {/* Recipe List */}
//       <div className="recipe-list">
//         {recipes.map((recipe) => (
//           <div
//             key={recipe.id}
//             className="recipe-card"
//             onClick={() => handleRecipeClick(recipe.id)} // Navigate to the recipe detail page
//           >
//             <img src={recipe.image} alt={recipe.title} />
//             <h3>{recipe.title}</h3>
//             <p>
//               <strong>Calories:</strong> {recipe.nutrition?.nutrients?.find((n) => n.name === 'Calories')?.amount || 'N/A'} kcal
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecipeCategory;


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { FaArrowLeft } from "react-icons/fa";
import axios from 'axios';
import "./styles/RecipeCategory.css";

const RecipeCategory = () => {
  const { category } = useParams();
  const navigate = useNavigate(); // Hook to navigate to the recipe detail page
  const [recipes, setRecipes] = useState([]);
  const [carbs, setCarbs] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fats, setFats] = useState(0);
  const [time, setTime] = useState('');
  const [recipeName, setRecipeName] = useState('');

  const apiKey = '2cf363e464msh40119dd71827212p1759f2jsn9f2d6345d821'; // Replace with your API key

  const apiUrl = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${category}&addRecipeNutrition=true&number=100`;

  // Fetch the recipes when the component mounts
  const increment = (setter, value) => setter(value + 1);
  const decrement = (setter, value) => setter(value > 0 ? value - 1 : 0);

  // Handle search functionality
  const handleSearch = () => {
    // Dynamically build the query string based on non-zero values
    let queryParams = [];

    // Include each parameter only if it has a valid value (not 0)
    if (carbs > 0) queryParams.push(`maxCarbs=${carbs}`);
    if (protein > 0) queryParams.push(`maxProtein=${protein}`);
    if (fats > 0) queryParams.push(`maxFat=${fats}`);
    if (time > 0) queryParams.push(`maxReadyTime=${time}`);
    if (recipeName.trim() !== '') queryParams.push(`query=${encodeURIComponent(recipeName)}`);

    const queryString = queryParams.length > 0 ? `&${queryParams.join('&')}` : '';

    // console.log('API Request:', `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?number=100&addRecipeNutrition=true${queryString}`);

    // Fetch the recipes from the API
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?number=100&addRecipeNutrition=true${queryString}`, {
          headers: {
            'x-rapidapi-key': '2cf363e464msh40119dd71827212p1759f2jsn9f2d6345d821',
            'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
          },
        });
        setRecipes(response.data.results);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            'x-rapidapi-key': '2cf363e464msh40119dd71827212p1759f2jsn9f2d6345d821',
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

  // Handle click on recipe to navigate to the detail page
  const handleRecipeClick = (recipeId) => {
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <div className="App">
      <button className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft className="back-arrow" />
      </button>
      <div className="recipe-search-container">
        <h2 className="recipe-search-title">From Dawn to Dusk: Delicious Bites for Every Craving!</h2>

        {/* Nutrient Control Section */}
        <div className="nutrient-control-container">
          <div className="nutrient-control">
            <span>Carbohydrates:</span>
            <button onClick={() => decrement(setCarbs, carbs)} className="nutrient-btn">-</button>
            <span>{carbs}</span>
            <button onClick={() => increment(setCarbs, carbs)} className="nutrient-btn">+</button>
          </div>

          <div className="nutrient-control">
            <span>Protein:</span>
            <button onClick={() => decrement(setProtein, protein)} className="nutrient-btn">-</button>
            <span>{protein}</span>
            <button onClick={() => increment(setProtein, protein)} className="nutrient-btn">+</button>
          </div>

          <div className="nutrient-control">
            <span>Fats:</span>
            <button onClick={() => decrement(setFats, fats)} className="nutrient-btn">-</button>
            <span>{fats}</span>
            <button onClick={() => increment(setFats, fats)} className="nutrient-btn">+</button>
          </div>
        </div>

        {/* Input Fields for Max Time and Recipe Name */}
        <div className="input-container">
          <div className="flex items-center space-x-2">
            <span>Max Time (mins):</span>
            <input
              type="number"
              onChange={(e) => setTime(e.target.value)}
              className="input-field"
            />
          </div>

          <div className="flex items-center space-x-2">
            <span>Recipe Name:</span>
            <input
              type="text"
              value={recipeName}
              onChange={(e) => setRecipeName(e.target.value)}
              placeholder="Enter recipe name"
              className="input-field"
            />
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
            onClick={() => handleRecipeClick(recipe.id)} // Navigate to the recipe detail page
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

export default RecipeCategory;
