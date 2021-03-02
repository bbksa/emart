import React from "react";
import TopNav from "./Components/Navigation.jsx";
import "bootstrap/dist/css/bootstrap.css";
import CategoriesNavigation from "./Components/CategoriesNav.jsx";
import Sliders from "./Components/Sliders.jsx";
import ItemOnHome from "./Components/ItemList.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <div>
      <TopNav/>
      <CategoriesNavigation/>
      <Sliders/>
      <ItemOnHome/>
      <Footer/>
    </div>
  );
}

export default App;
