
// import React, { useState, useEffect } from "react";
// import axios from "../utils/axios"; // Assuming axios is set up in utils folder for API calls
// import { useAuth } from "../context/AuthContext"; // Assuming you have an AuthContext for user data
// import "./styles/SavedItemsPage.css";

// const SavedItemsPage = () => {
//   const { user } = useAuth(); // Retrieve user information from AuthContext
//   const [savedItems, setSavedItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchSavedItems = async () => {
//       try {
//         const token = user?.token; // Assuming the user has a token in the context
//         if (!token) throw new Error("User not authenticated.");

//         const response = await axios.get("/saved-items", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         setSavedItems(response.data);
//       } catch (err) {
//         console.error("Error fetching saved items:", err);
//         setError("Failed to fetch saved items.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (user) fetchSavedItems();
//   }, [user]);

//   return (
//     <div className="saved-items-page">
//       <h1>Your Saved Items</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p className="error-message">{error}</p>
//       ) : savedItems.length > 0 ? (
//         <ul className="saved-items-list">
//           {savedItems.map((item) => (
//             <li key={item._id} className="saved-item">
//               <h2>{item.title}</h2>
//               <p>{item.description}</p>
//               <img src={item.imageUrl} alt={item.title} />
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No saved items found.</p>
//       )}
//     </div>
//   );
// };

// export default SavedItemsPage;
import React, { useState, useEffect } from "react";
import axios from "../utils/axios"; // Axios instance
import { useAuth } from "../context/AuthContext"; // Auth context
import "./styles/SavedItemsPage.css";

const SavedItemsPage = () => {
  const { user } = useAuth(); // Retrieve user info from AuthContext
  const [savedItems, setSavedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSavedItems = async () => {
      try {
        if (!user?.token) {
          throw new Error("User not authenticated.");
        }
      
        const response = await axios.get("http://localhost:5000/api/saved-items", {
          //  headers: { Authorization: `Bearer ${user.token}` },
        });

        setSavedItems(response.data);
      } catch (err) {
        console.error("Error fetching saved items:", err);
        setError(err.response?.data?.message || "Failed to fetch saved items.");
      } finally {
        setLoading(false);
      }
    };

    if (user) fetchSavedItems();
  }, [user]);

  return (
    <div className="saved-items-page">
      <h1>Your Saved Items</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : savedItems.length > 0 ? (
        <ul className="saved-items-list">
          {savedItems.map((item) => (
            <li key={item._id} className="saved-item">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>novacapture</p>
              {item.imageUrl && <img src={item.imageUrl} alt={item.title} />}
            </li>
          ))}
        </ul>
      ) : (
        <p>No saved items found.</p>
      )}
    </div>
  );
};

export default SavedItemsPage;
