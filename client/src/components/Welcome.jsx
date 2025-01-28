
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./styles/Welcome.css";
// import { AllRecipes } from "../data/AllRecipe";



// const Welcome = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(null);
//   const [searchQuery, setSearchQuery] = useState(""); // New state for search query
//   const navigate = useNavigate(); // Navigation hook
//   const [filteredRecipes, setFilteredRecipes] = useState([]);
//   const [ingredientQuery, setIngredientQuery] = useState("");
//   const [ingredientFilteredRecipes, setIngredientFilteredRecipes] = useState([]);
//   // const [nutritionFilter, setNutritionFilter] = useState("");
//   // const [nutritionFilteredRecipes, setNutritionFilteredRecipes] = useState([]);
//   const [topStories, setTopStories] = useState([]);
 
//   const loadTopStories = () => {
//     const filteredTopStories = AllRecipes.filter(
//       (recipe) => recipe.category === "Topstories-Recipes"
//     );
//     setTopStories(filteredTopStories);
//   };

//   // Load top stories on component mount
//   useEffect(() => {
//     loadTopStories();
//   }, []);
//   const fetchFilteredByIngredients = (query) => {
//     const inputIngredients = query
//       .toLowerCase()
//       .split(",")
//       .map((i) => i.trim());
  
//     return AllRecipes.filter((recipe) =>
//       inputIngredients.every((ingredient) =>
//         // Ensure recipe.ingredients is defined and an array
//         Array.isArray(recipe.ingredients) && 
//         recipe.ingredients.some((recipeIngredient) =>
//           recipeIngredient.toLowerCase().includes(ingredient)
//         )
//       )
//     );
//   };
  

  

//   useEffect(() => {
//     if (ingredientQuery.trim() === "") {
//       setIngredientFilteredRecipes([]);
//     } else {
//       const results = fetchFilteredByIngredients(ingredientQuery);
//       setIngredientFilteredRecipes(results);
//     }
//   }, [ingredientQuery]);

//   const fetchFilteredRecipes = (query) => {
//     return AllRecipes.filter((recipe) =>
//       recipe.recipeTitle.toLowerCase().includes(query.toLowerCase())
//     );
//   };

//   const toggleDropdown = (menu) => {
//     setDropdownOpen((prev) => (prev === menu ? null : menu));
//   };

//   const navigateToCategory = (category) => {
//     navigate(`/recipes/${category.toLowerCase()}`);
//   };

//   // const handleRecipeClick = (id) => {
//   //   console.log("Navigating to:", `/recipes/${id}`);
//   // };
//   const handleRecipeClick = (id, category = "topstories-recipes") => {
//     // Navigate to the recipe detail page with category and id
//     navigate(`/recipes/${category.toLowerCase()}/${id}`);
//     console.log("Navigating to:", `/recipes/${category.toLowerCase()}/${id}`);
//   };
  

//   useEffect(() => {
//     if (searchQuery === "") {
//       setFilteredRecipes([]);
//     } else {
//       const results = fetchFilteredRecipes(searchQuery);
//       setFilteredRecipes(results);
//     }
//   }, [searchQuery]);

//   return (
//     <div className="welcome-container">
//       {/* Navbar Section */}
//       <div className="top-section">
//         <div className="top-left">
//           <button onClick={() => toggleDropdown("recipes")}>Recipes</button>
//           <button onClick={() => toggleDropdown("ingredients")}>Ingredients</button>
//           <button onClick={() => toggleDropdown("occasions")}>Occasions</button>
//           <button onClick={() => toggleDropdown("kitchengear")}>Kitchen Gear</button>
//         </div>
//         <div className="top-right">
//           <input
//             type="text"
//             placeholder="Search recipes..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//         </div>
//       </div>

//       {/* Dropdown Menus */}
//       {dropdownOpen === "recipes" && (
//         <div className="dropdown">
//           <button className="close-btn" onClick={() => setDropdownOpen(null)}>
//             &times;
//           </button>
//           <div>
//             <strong>MEALS</strong>
//             <button onClick={() => navigateToCategory("Breakfast")}>Breakfast</button>
//             <button onClick={() => navigateToCategory("meals")}>Lunch</button>
//             <button onClick={() => navigateToCategory("dinner")}>Dinner</button>
//             <button onClick={() => navigateToCategory("Dessert")}>Dessert</button>
//             <button onClick={() => navigateToCategory("Drinks")}>Drinks</button>
//           </div>
//           <div>
//             <strong>Easy</strong>
//             <button onClick={() => navigateToCategory("30Min")}>30 Minutes or Less</button>
//             <button onClick={() => navigateToCategory("5ing")}>5 Ingredients or Fewer</button>
//             <button onClick={() => navigateToCategory("Makeahead")}>Make Ahead</button>
//             <button onClick={() => navigateToCategory("meals")}>One-Pot Meals</button>
//           </div>
//           <div>
//             <strong onClick={() => navigateToCategory("cooknow")}>To Cook Now</strong>
//             <button onClick={() => navigateToCategory("cooknow")}>Weeknight Favorites</button>
//             <button onClick={() => navigateToCategory("cooknow")}>Most Popular</button>
//           </div>
//         </div>
//       )}
//       {dropdownOpen === "ingredients" && (
//         <div className="dropdown">
//           <button className="close-btn" onClick={() => setDropdownOpen(null)}>
//             &times;
//           </button>
//           <div>
//             <h3 className="text">Find Recipes By Ingredients</h3>
//             <div className="input-btn">
//             <input
//               type="text"
//               placeholder="Enter ingredients separated by commas (e.g., eggs, milk)"
//               value={ingredientQuery}
//               onChange={(e) => setIngredientQuery(e.target.value)}
//             />
//             </div>
//           </div>
//         </div>
//       )}
//        {dropdownOpen === "occasions" && (
//         <div className="dropdown">
//           <button className="close-btn" onClick={() => setDropdownOpen(null)}>
//             &times;
//           </button>
//           <div>
//             <strong>SEASONAL</strong>
//             <button onClick={() => navigateToCategory("occasion")}>Fall favorites</button>
//             <button onClick={() => navigateToCategory("occasion")}>Thanksgiving</button>
//           </div>
//           <div>
//             <strong>GATHERINGS</strong>
//             <button>Dinner Parties</button>
//             <button>Birthdays</button>
//           </div>
//         </div>
//       )}

//       {dropdownOpen === "kitchengear" && (
//         <div className="dropdown">
//           <button className="close-btn" onClick={() => setDropdownOpen(null)}>
//             &times;
//           </button>
//           <div>
//             <strong>APPLIANCES</strong>
//             <button>Weeknight Favorites</button>
//             <button>Most Popular</button>
//           </div>
//         </div>
//       )}

//       {/* Top Stories Section */}
//       <div className="top-stories">
//         {ingredientQuery && ingredientFilteredRecipes.length > 0 ? (
//           <h2>Recipes Found by Ingredients:</h2>
//         ) : searchQuery ? (
//           <h2>Search results for "{searchQuery}"</h2>
//         ) : (
//           <h2>Top Recipes</h2>
//         )}

//         <div className="stories-container">
//           {ingredientQuery && ingredientFilteredRecipes.length > 0 ? (
//             ingredientFilteredRecipes.map((recipe) => (
//               <div key={recipe.id} className="story-card" onClick={() => handleRecipeClick(recipe.id)}>
                
//                 <img
//                   src={`${process.env.PUBLIC_URL}/topstories/${recipe.imgUrl}`} // Correct path from the public folder
//                   alt=""
//                   style={{ width: "100%", height: "150px", objectFit: "cover" }}
//                 />
                
//                 <p>{recipe.recipeDescription}</p>
//               </div>
//             ))
//           ) : searchQuery ? (
//             filteredRecipes.length > 0 ? (
//               filteredRecipes.map((recipe) => (
//                 <div key={recipe.id} className="story-card" onClick={() => handleRecipeClick(recipe.id)}>
    
//                   <img
//                   src={`${process.env.PUBLIC_URL}/topstories/${recipe.imgUrl}`}
//                   alt=""
//                   style={{ width: "100%", height: "150px", objectFit: "cover" }}
//                 />
//                 <h3>{recipe.recipeTitle}</h3>
//                 <p>{recipe.recipeDescription}</p>
//                   {/*<p>Cook Time: {recipe.cookTime}</p>*/}
//           {/*<p>Ingredients: {recipe.ingredients.join(", ")}</p>*/}
//                 </div>
//               ))
//             ) : (
//               <p>No recipes found for "{searchQuery}".</p>
//             )
//           ) : (
//             topStories.map((recipe) => (
//               <div key={recipe.id} className="story-card" onClick={() => handleRecipeClick(recipe.id)}>
//                 <img
//                   src={`${process.env.PUBLIC_URL}/topstories/${recipe.imgUrl}`}
//                   alt=""
//                   style={{ width: "100%", height: "150px", objectFit: "cover" }}
//                 />
//                 <h3>{recipe.recipeTitle}</h3>
//                 <p>{recipe.recipeDescription}</p>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Welcome;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Welcome.css";
import { AllRecipes } from "../data/AllRecipe";

const Welcome = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const navigate = useNavigate();
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [ingredientQuery, setIngredientQuery] = useState("");
  const [ingredientFilteredRecipes, setIngredientFilteredRecipes] = useState([]);
  const [topStories, setTopStories] = useState([]);

  const loadTopStories = () => {
    const filteredTopStories = AllRecipes.filter(
      (recipe) => recipe.category === "Topstories-Recipes"
    );
    setTopStories(filteredTopStories);
  };

  // Load top stories on component mount
  useEffect(() => {
    loadTopStories();
  }, []);

  const fetchFilteredByIngredients = (query) => {
    const inputIngredients = query
      .toLowerCase()
      .split(",")
      .map((i) => i.trim());

    return AllRecipes.filter((recipe) =>
      Array.isArray(recipe.ingredients) &&
      inputIngredients.every((ingredient) =>
        recipe.ingredients.some((recipeIngredient) =>
          recipeIngredient.toLowerCase().includes(ingredient)
        )
      )
    );
  };

  // *** Updated function to handle keyword-based filtering ***
  const fetchFilteredRecipes = (query) => {
    const lowerQuery = query.toLowerCase();
  
    return AllRecipes.filter((recipe) => {
      // Check if recipe title matches the query
      const titleMatch = recipe.recipeTitle.toLowerCase().includes(lowerQuery);
      //const flavor=recipe.flavorProfile.toLowerCase().includes(lowerQuery);
      const flavor = recipe.flavorProfile?.toLowerCase().includes(lowerQuery) || false;

      // Check if any tags match the query
      const tagsMatch =
        recipe.tags &&
        recipe.tags.some((tag) => tag.toLowerCase().includes(lowerQuery));

      const dietMatch=recipe.dietDetails&&recipe.dietDetails.some((diet)=>diet.toLowerCase().includes(lowerQuery));
      // Check if any nutritional value matches the query
      const nutritionMatch =
        recipe.nutritionalInformation &&
        Object.values(recipe.nutritionalInformation)
          .map((val) => val.toString().toLowerCase())
          .some((val) => val.includes(lowerQuery));
  
      // Return true if any of the conditions match
      const nutritional=recipe.nutritionalTags&&recipe.nutritionalTags.some((val)=>val.toLowerCase().includes(lowerQuery));
      return titleMatch || tagsMatch || nutritionMatch || dietMatch || nutritional || flavor;
    });
  };
  

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => (prev === menu ? null : menu));
  };

  const navigateToCategory = (category) => {
    navigate(`/recipes/${category.toLowerCase()}`);
  };

  const handleRecipeClick = (id, category = "topstories-recipes") => {
    navigate(`/recipes/${category.toLowerCase()}/${id}`);
    console.log("Navigating to:", `/recipes/${category.toLowerCase()}/${id}`);
  };

  useEffect(() => {
    if (ingredientQuery.trim() === "") {
      setIngredientFilteredRecipes([]);
    } else {
      const results = fetchFilteredByIngredients(ingredientQuery);
      setIngredientFilteredRecipes(results);
    }
  }, [ingredientQuery]);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredRecipes([]);
    } else {
      const results = fetchFilteredRecipes(searchQuery);
      setFilteredRecipes(results);
    }
  }, [searchQuery]);

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
            type="text"
            placeholder="Search recipes (e.g., low oil, high protein, 5 min)..."
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
            <button onClick={() => navigateToCategory("Breakfast")}>Breakfast</button>
            <button onClick={() => navigateToCategory("meals")}>Lunch</button>
            <button onClick={() => navigateToCategory("dinner")}>Dinner</button>
            <button onClick={() => navigateToCategory("Dessert")}>Dessert</button>
            <button onClick={() => navigateToCategory("Drinks")}>Drinks</button>
          </div>
          <div>
            <strong>Easy</strong>
             <button onClick={() => navigateToCategory("30Min")}>30 Minutes or Less</button>
             <button onClick={() => navigateToCategory("5ing")}>5 Ingredients or Fewer</button>
             <button onClick={() => navigateToCategory("Makeahead")}>Make Ahead</button>
             <button onClick={() => navigateToCategory("meals")}>One-Pot Meals</button>
           </div>
           <div>
             <strong onClick={() => navigateToCategory("cooknow")}>To Cook Now</strong>
             <button onClick={() => navigateToCategory("cooknow")}>Weeknight Favorites</button>
             <button onClick={() => navigateToCategory("cooknow")}>Most Popular</button>
           </div>
         </div>
      )}
      {dropdownOpen === "ingredients" && (
        <div className="dropdown">
          <button className="close-btn" onClick={() => setDropdownOpen(null)}>
            &times;
          </button>
          <div>
            <h3 className="text">Find Recipes By Ingredients</h3>
            <div className="input-btn">
            <input
              type="text"
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
            <button onClick={() => navigateToCategory("occasion")}>Fall favorites</button>
            <button onClick={() => navigateToCategory("occasion")}>Thanksgiving</button>
          </div>
          <div>
            <strong>GATHERINGS</strong>
            <button>Dinner Parties</button>
            <button>Birthdays</button>
          </div>
        </div>
      )}

      {dropdownOpen === "kitchengear" && (
        <div className="dropdown">
          <button className="close-btn" onClick={() => setDropdownOpen(null)}>
            &times;
          </button>
          <div>
            <strong>APPLIANCES</strong>
            <button>Weeknight Favorites</button>
            <button>Most Popular</button>
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
                <img
                  src={`${process.env.PUBLIC_URL}/topstories/${recipe.imgUrl}`}
                  alt=""
                  style={{ width: "100%", height: "150px", objectFit: "cover" }}
                />
                <p>{recipe.recipeDescription}</p>
              </div>
            ))
          ) : searchQuery ? (
            filteredRecipes.length > 0 ? (
              filteredRecipes.map((recipe) => (
                <div key={recipe.id} className="story-card" onClick={() => handleRecipeClick(recipe.id)}>
                  <img
                    src={`${process.env.PUBLIC_URL}/topstories/${recipe.imgUrl}`}
                    alt=""
                    style={{ width: "100%", height: "150px", objectFit: "cover" }}
                  />
                  <h3>{recipe.recipeTitle}</h3>
                  <p>{recipe.recipeDescription}</p>
                </div>
              ))
            ) : (
              <p>No recipes found for "{searchQuery}".</p>
            )
          ) : (
            topStories.map((recipe) => (
              <div key={recipe.id} className="story-card" onClick={() => handleRecipeClick(recipe.id)}>
                <img
                  src={`${process.env.PUBLIC_URL}/topstories/${recipe.imgUrl}`}
                  alt=""
                  style={{ width: "100%", height: "150px", objectFit: "cover" }}
                />
                <h3>{recipe.recipeTitle}</h3>
                <p>{recipe.recipeDescription}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
