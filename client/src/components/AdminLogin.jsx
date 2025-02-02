
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/AdminLogin.css"
const AdminLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        localStorage.setItem("adminToken", data.token);  // Store token in localStorage
        navigate("/admin-dashboard");
      } else {
        alert(data.message);  // Show error message if login fails
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  
  return (
    <div className="admin-login-container">
  <div className="admin-login-box">
    <h2>Admin Login</h2>
    <input
      type="text"
      placeholder="Username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button onClick={handleLogin} className="admin-btn">
      Login
    </button>
    <button className="admin-login-back-btn" onClick={() => navigate("/")}>
      Back to Home
    </button>
  </div>
</div>

  );
};

export default AdminLogin;