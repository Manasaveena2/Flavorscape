// // import React from 'react';
// // import './styles/Profile.css';

// // const Profile = () => {
// //   return (
// //     <div className="profile">
// //       <h1>Your Profile</h1>
// //       <div className="profile-details">
// //         <p><strong>Name:</strong> John Doe</p>
// //         <p><strong>Email:</strong> john@example.com</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Profile;
// // src/components/Profile.jsx
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useAuth } from '../context/AuthContext';  // Assuming you're using AuthContext for authentication
// // import './styles/Profile.css';

// // const Profile = () => {
// //   const { user } = useAuth(); // Get the user data from context (or localStorage)
// //   const [profile, setProfile] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchProfile = async () => {
// //       try {
// //         // Assuming you have the user's ID in the context or token
// //         const response = await axios.get('http://localhost:5000/api/profile', {
// //           // headers: {
// //           //   Authorization: `Bearer ${user.token}`, // Add token if required for authentication
// //           // },
// //         });
// //         setProfile(response.data);
// //       } catch (err) {
// //         setError('Error fetching profile');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     if (user && user._id) {
// //       fetchProfile();
// //     }
// //   }, [user]);

// //   if (loading) return <p>Loading profile...</p>;
// //   if (error) return <p>{error}</p>;

// //   return (
// //     <div className="profile">
// //       <h1>Your Profile</h1>
// //       {profile ? (
// //         <div className="profile-details">
// //           <p><strong>Name:</strong> {profile.name}</p>
// //           <p><strong>Email:</strong> {profile.email}</p>
// //         </div>
// //       ) : (
// //         <p>No profile data available</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default Profile;
// import React, { useState, useEffect } from "react";
// import axios from "../utils/axios"; // Assuming axios instance is set up
// import { useAuth } from "../context/AuthContext"; // Assuming AuthContext provides user token
// import "./styles/Profile.css"; // Add CSS as needed
// import './Login';

// const Profile = () => {
//   const { user } = useAuth(); // Retrieve token and user info from AuthContext
//   const [profileData, setProfileData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = user?.token; // Retrieve token
//         if (!token) throw new Error("User not authenticated.");

//         const response = await axios.get('/profile', {
//            headers: { Authorization: `Bearer ${token}` },
//         });

//         setProfileData(response.data);
//       } catch (err) {
//         console.error("Error fetching profile:", err);
//         setError(err.response?.data?.message || "Failed to fetch profile data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (user) fetchProfile();
//   }, [user]);

//   return (
//     <div className="profile-page">
//       <h1>Profile</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p className="error-message">{error}</p>
//       ) : profileData ? (
//         <div className="profile-details">
//           <p><strong>Username:</strong> {profileData.username}</p>
//           <p><strong>Email:</strong> {profileData.email}</p>
//         </div>
//       ) : (
//         <p>No profile data found.</p>
//       )}
//     </div>
//   );
// };

// export default Profile;



import React from "react";
import { useAuth } from "../context/AuthContext";
import "./styles/Profile.css";

const Profile = () => {
  const { user } = useAuth(); // Access the user object from AuthContext
  const username = localStorage.getItem('username');
console.log(username);
console.log(user.user.email);
  return (
    <div className="profile-page">
      <h1>Profile</h1>
      {user ? (
        <div className="profile-details">
          <p><strong>Username:</strong> {username || "No username available"}</p>
          <p><strong>Email:</strong> {user.user.email}</p>
        </div>
      ) : (
        <p>No user data available. Please log in.</p>
      )}
    </div>
  );
};

export default Profile;
