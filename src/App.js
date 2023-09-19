import React, { useState } from "react";
import Header from "./components/layouts/Header";
import Cart from "./components/Cart/Cart";
import ContextProvider from "./components/ContextStore/ContextProvider";
import "./App.css";
import AboutUs from "./components/pages/AboutUs";
import Products from "./components/products/Products";
import Home from "./components/pages/Home";
import ContactUs from "./components/pages/ContactUs";
import { Route, Switch} from "react-router-dom/cjs/react-router-dom";
import Item from "./components/pages/Item";

function App() {
  const [openCart, setShowCart] = useState(false);
  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };
  return (
    <ContextProvider>
      {openCart && <Cart onClose={hideCartHandler} />}

      <Header onOpen={showCartHandler} />
      <div className="title">The Generics</div>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/store" exact>
          <Products />
        </Route>
        <Route path="/store/:item">
          <Item />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="contact">
          <ContactUs />
        </Route>
      </Switch>
    </ContextProvider>
  );
}

export default App;
