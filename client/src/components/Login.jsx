


import React, { useState } from "react";
import { useAuth } from "../context/AuthContext"; // Import the Auth context
import './styles/Login.css'; // Add the CSS file for styling
import pic9 from "../assets/pic9.jpeg"
const Login = ({ handleToggleForm }) => {
  const { login } = useAuth(); // Access the login function from AuthContext
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // To handle invalid login
  const [success, setSuccess] = useState(''); // To handle successful login

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("user data 11",data);

      if (response.ok) {
        login(data); // Update the authentication context with user data
        setSuccess(data.message); // Display success message
        console.log('Login Successful');
         console.log("user details 222",data);
        
        // Navigate to the homepage or a welcome page
         window.location.href = "/welcome";
      } else {
        setError(data.message || "Invalid email or password");
        setSuccess('');
      }
    } catch (err) {
      console.error('Error during login:', err);
      setError("An error occurred. Please try again.");
      setSuccess('');
    }
  };

  return (
    <div className="login-container">
      {/* Left side image */}
      <div className="image-container">
        <img src={pic9} alt="Login" className="login-image" />
      </div>

      {/* Right side login form */}
      <div className="form-container">
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
          <p>
            Don't have an account?{' '}
            <span onClick={handleToggleForm} className="toggle-link">
              Create an account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
