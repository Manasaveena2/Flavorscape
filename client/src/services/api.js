const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '2cf363e464msh40119dd71827212p1759f2jsn9f2d6345d821',
        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    },
};

// Fetch recipes from Spoonacular API
async function fetchRecipes() {
    try {
        const response = await fetch(url, options);
        // if (!response.ok) throw new Error(HTTP error! status: ${response.status});
        const data = await response.json();
        return data.results; // Return the recipes array
    } catch (error) {
        console.error('Error fetching recipes:', error);
        throw new Error('Failed to fetch recipes');
    }
}

export { fetchRecipes };