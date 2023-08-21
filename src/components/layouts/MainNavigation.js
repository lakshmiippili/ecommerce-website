import React, { useState } from "react";
import Header from "./Header";
import Cart from "../Cart/Cart";
import { Outlet } from "react-router-dom";
import ContextProvider from "../ContextStore/ContextProvider";
import Modal from "../UI/Modal";
const MainNavigation = () => {
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
      <Outlet />
    </ContextProvider>
  );
};

export default MainNavigation;
