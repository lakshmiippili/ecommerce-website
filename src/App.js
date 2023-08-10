import React,{useState} from "react";
import Cart from "./components/Cart/Cart";
import "./App.css";
import Products from "./components/products/Products";
import Header from "./components/layouts/Header";

function App() {
  const [showCart,setShowCart] =useState(false)
  const showCartHandler =()=>{
    setShowCart(true)
  }
  const hideCartHandler =()=>{
    setShowCart(false)
  }
  return (
    <React.Fragment>
      <div className="app">
        <Header onOpen={showCartHandler}/>
      </div>
      <div><h1 align='center'>The Generics</h1></div>
      <div>
        <Products />
      </div>
      {showCart && <Cart onClose={hideCartHandler}/>}
    </React.Fragment>
  );
}

export default App;
