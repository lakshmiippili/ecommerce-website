import React,{useState} from "react";
import Header from './Header'
import Products from "../products/Products";
import Cart from "../Cart/Cart";
import ContextProvider from "../store/ContextProvider";

const Navigation = () => {
    const [openCart,setShowCart] =useState(false)
  const showCartHandler =()=>{
    setShowCart(true)
  }
  const hideCartHandler =()=>{
    setShowCart(false)
  }
  return <ContextProvider>
  <div className="app">
    <Header onOpen={showCartHandler}/>
  </div>
  <div><h1 align='center'>The Generics</h1></div>
  <div>
    <Products />
  </div>
  {openCart && <Cart onClose={hideCartHandler}/>}
</ContextProvider>;
};

export default Navigation;
