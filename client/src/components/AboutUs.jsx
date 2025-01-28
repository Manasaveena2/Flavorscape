import React from "react";
import "./styles/AboutUs.css";
import image from "../assets/pic3.jpeg"; // Image path

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="image-container">
          <img
            src={image}  // Replace with your actual image path
            alt="About Flavorscape"
            className="about-us-image"
          />
        </div>
        <div className="text-container">
          <h1>About Us</h1>
          <p>
            Flavorscape is your personal recipe assistant that helps you discover, create, and share culinary delights.
            Our mission is to simplify cooking and make it more enjoyable with personalized recipe generation, AI-powered recommendations,
            and a seamless experience across all your devices.
          </p>
          <p>
            Whether you're a seasoned chef or just starting your cooking journey, Flavorscape offers tools like ingredient-based meal suggestions,
            healthy eating options, customizable meal plans, and interactive cooking guidance. We aim to make cooking fun, easy, and
            accessible for everyone.
          </p>
          <p>
          Our mission is to make cooking more accessible, enjoyable, and convenient for everyone. We believe that food should be both nourishing and exciting, which is why Flavorscape offers not just recipes, but a culinary experience that adapts to your tastes and lifestyle.
          </p>
          <p>Join us in creating a world of flavors, one recipe at a time!</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
