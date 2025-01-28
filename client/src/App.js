//*********************correct code****************** */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import LoginRegister from './components/LoginRegister';
import Profile from './components/Profile';
import Footer from "./components/Footer";
import Welcome from './components/Welcome';
import RecipeResults from './components/RecipeResults';
import RecipeCategory from "./components/RecipeCategory";
import RecipeDetail from "./components/RecipeDetail";
import SavedItemsPage from "./components/SavedItemsPage"

const App = () => {
  return (
    <UserProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/recipe-results/:category" element={<RecipeResults />} />
        {/*<Route path="/recipes/:category" element={<RecipeCategory />} />*/}
        <Route path="/recipes/:category" element={<RecipeCategory />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="/recipes/:category/:id" element={<RecipeDetail />} />
<Route path="/saved-items" element={<SavedItemsPage />} />


      </Routes>
      <Footer />
    </Router>
    </UserProvider>
  );
};

export default App;
//*********************correct code****************** */