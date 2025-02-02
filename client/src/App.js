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
import DropDownpage from "./components/DropDownPage"
import TastePage from "./components/TastePage"
import TimePage from "./components/TimePage"
import DietPage from "./components/DietPage"
import PopularPage from "./components/PopularPage"
import AccessPage from './components/AccessPage';
import SeasonPage from './components/SeasonPage';
import OnePot from './components/OnePot';
import EquipmentPage from './components/EquipmentPage';
import AdminLogin from './components/AdminLogin';

const App = () => {
  return (
    <UserProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-dashboard" element={<Welcome/>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/AccessPage" element={<AccessPage/>}/>
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/recipe-results/:category" element={<RecipeResults />} />
        <Route path="/recipes/:category" element={<RecipeCategory />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="recipes-cuisine/:category" element={<DropDownpage/>}/>
        <Route path="recipes-taste/:category" element={<TastePage/>}/>
        <Route path="recipes-time/:category" element={<TimePage/>}/>
        <Route path="recipes-diet/:category" element={<DietPage/>}/>
        <Route path="recipes-popular/:category" element={<PopularPage/>}/>
        <Route path="recipes-seasonal/:category" element={<SeasonPage/>}/>
       <Route path="recipes-meal/:category" element={<OnePot/>}/> 
       <Route path="recipes-equipment/:category" element={<EquipmentPage/>}/>
<Route path="/saved-items" element={<SavedItemsPage />} />


      </Routes>
      <Footer />
    </Router>
    </UserProvider>
  );
};

export default App;
//*********************correct code****************** */