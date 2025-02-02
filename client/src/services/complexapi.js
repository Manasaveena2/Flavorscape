const BASE_URL = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch';
const API_KEY = '2cf363e464msh40119dd71827212p1759f2jsn9f2d6345d821'; // Replace with your actual API Key

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
};

// Fetch recipes by ingredients from Spoonacular API
async function fetchRecipesByIngredients(ingredients) {
    try {
        const url = `${BASE_URL}?includeIngredients=${encodeURIComponent(ingredients)}&number=10&addRecipeInformation=true`;
        const response = await fetch(url, options);

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        console.log(`Fetched ${data.results.length} recipes successfully.`);

        return data.results; // Return array of recipes
    } catch (error) {
        console.error('Error fetching recipes:', error);
        throw new Error('Failed to fetch recipes');
    }
}
async function fetchFilteredRecipes(query) {
    try {
        const url = `${BASE_URL}?query=${encodeURIComponent(query)}&number=10&addRecipeInformation=true`;
        const response = await fetch(url, options);

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        console.log(`Fetched ${data.results.length} recipes for query: "${query}" successfully.`);

        return data.results; // Return array of recipes
    } catch (error) {
        console.error('Error fetching filtered recipes:', error);
        throw new Error('Failed to fetch recipes');
    }
}

export { fetchRecipesByIngredients, options,fetchFilteredRecipes }; // Exporting function
