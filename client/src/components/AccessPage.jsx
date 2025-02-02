import React from "react";
import { useNavigate } from "react-router-dom";
const AccessPage = () => {
    const navigate = useNavigate();
  const containerStyle = {
    display: "flex",
    height: "100vh",
    background: "linear-gradient(to right, #e8f5e9, #fff)", // Light green gradient like HackerRank
    justifyContent: "center",
    alignItems: "center",
  };

  const cardStyle = {
    display: "flex",
    width: "80%",
    maxWidth: "900px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
    overflow: "hidden", // Keeps sections aligned
  };

  const sectionStyle = {
    flex: 1,
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };

  const leftSectionStyle = {
    ...sectionStyle,
    background: "#e8f5e9", // Light green background for admin side
  };

  const titleStyle = {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#2d3e50",
    marginBottom: "10px",
  };

  const paragraphStyle = {
    fontSize: "16px",
    color: "#4f4f4f",
    marginBottom: "20px",
  };

  const buttonStyle = {
    padding: "12px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    width: "60%",
    textTransform: "uppercase",
  };

  const adminBtnStyle = {
    ...buttonStyle,
    backgroundColor: "#007BFF",
    color: "#fff",
  };

  const userBtnStyle = {
    ...buttonStyle,
    backgroundColor: "#28a745",
    color: "#fff",
  };
  const handleAdmin=()=>{
    navigate(`/admin`);
  }
  const handleClick = () => {
    navigate(`/login`);
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        {/* Admin Section */}
        <div style={leftSectionStyle}>
          <h2 style={titleStyle}>For Admins</h2>
          <p style={paragraphStyle}>
            Take control of your platform! Effortlessly manage users, curate recipes, and customize settings to create the perfect experience.
          </p>
          <button onClick={handleAdmin} style={adminBtnStyle}>Admin Login</button>
        </div>

        {/* User Section */}
        <div style={sectionStyle}>
          <h2 style={titleStyle}>For Users</h2>
          <p style={paragraphStyle}>
            Discover, save, and craft unique recipes tailored to your taste. Your personalized culinary journey starts here!
          </p>
          <button onClick={handleClick} style={userBtnStyle}>User Login / Register</button>
        </div>
      </div>
    </div>
  );
};

export default AccessPage;
