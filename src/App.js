import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import TopNav from "./Components/Navigation.jsx";
import CategoriesNavigation from "./Components/CategoriesNav.jsx";
// import Sliders from "./Components/Sliders.jsx";
// import ItemOnHome from "./Components/ItemList.jsx";
import Footer from "./Components/Footer.jsx";
import MobileAccessories from "./Components/MobileAccessories.jsx";

function App() {
  return (
    <div>
      <TopNav/>
      <CategoriesNavigation/>
      {/* <Sliders/> */}
      {/* <ItemOnHome/> */}
      <MobileAccessories/>
      <Footer/>
      
    </div>
  );
}

export default App;
