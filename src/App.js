import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import TopNav from "./Components/Navigation.jsx";
import CategoriesNavigation from "./Components/CategoriesNav.jsx";
import UserLog from "./Components/UserIn.jsx";
import Sliders from "./Components/Sliders.jsx";
import ItemOnHome from "./Components/ItemList.jsx";
import MobileAccessories from "./Components/MobileAccessories.jsx";
import Order from "./Components/Order.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <div>
      <TopNav/>
      {/* <CategoriesNavigation/> */}
      {/* <UserLog/> */}
      {/* <Sliders/> */}
      {/* <ItemOnHome/> */}
      {/* <MobileAccessories/> */}
      <Order/>
      <Footer/>
      
    </div>
  );
}

export default App;
