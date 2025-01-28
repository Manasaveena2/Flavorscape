
import React, { useState } from "react";
import { useUser } from "../context/UserContext"; // Use the UserContext for user data
import { Link, useNavigate } from "react-router-dom";
import './styles/Navbar.css'; // Add styles for profile icon and dropdown
import logo from '../assets/logo.jpeg';
import userImg from '../assets/pi2.png';

const Navbar = () => {
  const { user, logout } = useUser(); // Access user and logout from context
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Handle logout and redirect to login
  const handleLogout = () => {
    logout(); // Clear the user context and remove stored user
    navigate("/login"); // Redirect to login after logout
  };

  // Toggle dropdown menu for user options
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  // Close dropdown menu
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Flavorscape" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>

        {/* Conditionally render user-specific options */}
        {user ? (
          <div className="navbar-profile">
            <img
              src={userImg}
              alt="Profile"
              className="profile-icon"
              onClick={toggleDropdown} // Toggle dropdown on click
            />
            {isDropdownOpen && (
              <div className="dropdown-menu" onMouseLeave={closeDropdown}>
                <button
                  onClick={() => {
                    navigate("/profile");
                    closeDropdown();
                  }}
                  className="dropdown-item"
                >
                  Profile
                </button>
                <button
                  onClick={() => {
                    navigate("/saved-items");
                    closeDropdown();
                  }}
                  className="dropdown-item"
                >
                  Saved Items
                </button>
                <button
                  onClick={handleLogout}
                  className="dropdown-item logout-item"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button onClick={() => navigate("/login")} className="auth-button">
            Sign In
          </button>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
