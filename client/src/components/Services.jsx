import React from 'react';
import './styles/Services.css';

// Import images
import pic1 from '../assets/pic1.jpeg';
import pic2 from '../assets/pic2.jpeg';
import pic4 from '../assets/pic4.jpeg';
import pic5 from '../assets/pic5.jpeg';
import pic6 from '../assets/pic6.jpeg';
import pic7 from '../assets/pic7.jpeg';
import pic8 from '../assets/pic8.jpeg';
import pic10 from '../assets/pic10.jpeg';

const services = [
  {
    title: "Personalized Recipe Generation",
    description: "Get recipes tailored to your preferences and tastes.",
    image: pic1,
  },
  {
    title: "Ingredient-Based Meals",
    description: "Find recipes based on ingredients you already have.",
    image: pic2,
  },
  {
    title: "Healthy Eating Options",
    description: "Discover nutritious and balanced meal ideas.",
    image: pic4,
  },
  {
    title: "Customizable Meal Plans",
    description: "Create meal plans that suit your schedule and diet.",
    image: pic5,
  },
  {
    title: "Interactive Cooking Guidance",
    description: "Step-by-step instructions for seamless cooking.",
    image: pic6,
  },
  {
    title: "Community Recipe Sharing",
    description: "Share and explore recipes with fellow food enthusiasts.",
    image: pic7,
  },
  {
    title: "AI-Powered Recommendations",
    description: "Get intelligent suggestions based on your interests.",
    image: pic8,
  },
  {
    title: "Cross-Device Accessibility",
    description: "Access your recipes anywhere, anytime.",
    image: pic10,
  },
];

const Services = () => {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <div className="service-cards">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
