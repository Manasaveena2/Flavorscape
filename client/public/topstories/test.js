const url = 'https://the-vegan-recipes-db.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '2cf363e464msh40119dd71827212p1759f2jsn9f2d6345d821',
		'x-rapidapi-host': 'the-vegan-recipes-db.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}