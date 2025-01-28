
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import './styles/Home.css';
import videoSrc from '../assets/bg.mp4'; // Import the video

const Home = () => {
  const navigate = useNavigate();
  const { user } = useUser(); // Get the current user from context

  // Handler for "Explore Now" button click
  const handleExploreClick = () => {
    if (user) {
      navigate('/welcome'); // Redirect to the welcome page if logged in
    } else {
      navigate('/login'); // Redirect to the login page if not logged in
    }
  };

  return (
    <div className="home">
      {/* Video Background Section */}
      <div className="video-background-container">
        <video 
          autoPlay 
          loop 
          muted 
          className="video-background" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content Overlay */}
        <div className="content">
          <h1 className="flavorscape-text">Welcome to Flavorscape</h1>
          <p>Your personalized recipe generator.</p>
          <button onClick={handleExploreClick} className="explore-btn">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
