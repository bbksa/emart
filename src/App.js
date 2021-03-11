import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import TopNav from "./Components/Navigation.jsx";
import CategoriesNavigation from "./Components/CategoriesNav.jsx";
import UserLog from "./Components/UserIn.jsx";
import Sliders from "./Components/Sliders.jsx";
import ItemOnHome from "./Components/ItemList.jsx";
import MobileAccessories from "./Components/MobileAccessories.jsx";
import Order from "./Components/Order.jsx";
import Cart from "./Components/Cart.jsx";
import Footer from "./Components/Footer.jsx";
import About from "./Components/About.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/signin">
            <UserLog />
          </Route>

          <Route exact path="/home">
            <TopNav />
            <CategoriesNavigation />
            <Sliders />
            <ItemOnHome />
            <Footer />
          </Route>

          <Route exact path="/Mobile">
            <TopNav />
            <CategoriesNavigation />
            <MobileAccessories />
            <Footer />
          </Route>

          <Route exact path="/order">
            <TopNav />
            <CategoriesNavigation />
            <Order />
            <Footer />
          </Route>

          <Route exact path="/cart">
            <TopNav />
            <CategoriesNavigation />
            <Cart />
            <Footer />
          </Route>

          <Route exact path="/about">
            <TopNav />
            <CategoriesNavigation />
            <About />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
