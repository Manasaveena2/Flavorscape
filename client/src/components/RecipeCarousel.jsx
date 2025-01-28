import React from 'react';
import './styles/RecipeCarousel.css';

const RecipeCarousel = () => {
  const recipes = [
    { id: 1, title: 'Spaghetti Bolognese', image: '/images/spaghetti.jpg' },
    { id: 2, title: 'Chicken Curry', image: '/images/chicken-curry.jpg' },
    { id: 3, title: 'Chocolate Cake', image: '/images/chocolate-cake.jpg' },
  ];

  return (
    <div className="carousel">
      {recipes.map((recipe) => (
        <div className="carousel-item" key={recipe.id}>
          <img src={recipe.image} alt={recipe.title} />
          <p>{recipe.title}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeCarousel;
