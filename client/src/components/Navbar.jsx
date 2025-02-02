
import React, { useEffect,useState } from "react";
import { useUser } from "../context/UserContext"; // Use the UserContext for user data
import { Link, useNavigate } from "react-router-dom";
import './styles/Navbar.css'; // Add styles for profile icon and dropdown
import logo from '../assets/logo.jpeg';
import userImg from '../assets/pi2.png';

const Navbar = () => {
  const { user, logout } = useUser(); // Access user and logout from context
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Handle logout and redirect to login
  const handleLogout = () => {
    logout(); // Clear the user context and remove stored user
    navigate("/login"); // Redirect to login after logout
  };
  const handleLogoutAdmin = () => {
    localStorage.removeItem("adminToken");
    setIsAdmin(false); // Set isAdmin to false after logout
    navigate("/"); // Navigate to the home page after logout
  };
  useEffect(() => {
    const token = localStorage.getItem("adminToken"); // Retrieve the token from localStorage
    console.log("Admin Token:", token);
    if (token) {
      setIsAdmin(true); // If token exists, set isAdmin to true
    } else {
      setIsAdmin(false); // If token doesn't exist, set isAdmin to false
    }
  }, []);
  

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
       
        {isAdmin && (
          <>
            <li>
              <Link to="/admin-dashboard">Overview</Link>
            </li>
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
                    onClick={handleLogoutAdmin}
                    className="dropdown-item logout-item"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </>
        )}

        {/* Show profile icon and dropdown for normal user */}
        {user && !isAdmin && (
          <div className="navbar-profile">
            <img
              src={userImg} // User's profile image
              alt="User Profile"
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
        )}

        {/* If neither admin nor user is logged in, show Sign In button */}
        {!user && !isAdmin && (
          <button onClick={() => navigate("/AccessPage")} className="auth-button">
            Sign In
          </button>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
