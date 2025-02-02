// import React from "react";
// import { useAuth } from "../context/AuthContext";
// import "./styles/Profile.css";

// const Profile = () => {
//   const { user } = useAuth(); // Access the user object from AuthContext
//   const username = localStorage.getItem('username');
// console.log(username);
// console.log(user.user.email);
// console.log(user.user._id);


//   return (
//     <div className="profile-page">
//       <h1>Profile</h1>
//       {user ? (
//         <div className="profile-details">
//           <p><strong>Username:</strong> {username || "No username available"}</p>
//           <p><strong>Email:</strong> {user.user.email}</p>
//         </div>
//       ) : (
//         <p>No user data available. Please log in.</p>
//       )}
//     </div>
//   );
// };

// export default Profile;




import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import "./styles/Profile.css";
import userImg from '../assets/pi2.png';
const Profile = () => {
  const { user } = useAuth(); // Get user details from AuthContext
  const username = localStorage.getItem("username");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (user && user.user._id) {
        try {
          const response = await axios.get(`http://localhost:5000/api/profile/${user.user._id}`);
          setUserData(response.data);
        } catch (error) {
          console.error("Error fetching user details:", error.response?.data || error.message);
        }
      }
    };

    fetchUserDetails();
  }, [user]);

  return (
    <div className="profile-page">
      <h1>Profile</h1>
      {userData ? (
        <div className="profile-details">
          <p><strong>Username:</strong> {username || "No username available"}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <img src={userImg} className="animated-image" />

          {/* <p><strong>Joined:</strong> {new Date(userData.createdAt).toLocaleDateString()}</p> */}
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default Profile;
