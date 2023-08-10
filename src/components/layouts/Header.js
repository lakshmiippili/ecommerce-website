import React from "react";
import "./Header.css";
const Header = (props) => {
  return (
    
    <header>
      <div className="nav">
        <a href="./index.html">Home</a>
        <a href="./index.html">Store</a>
        <a href="./index.html">About</a>
        <button className="cart" onClick={props.onOpen}>
          Cart
        </button>
      </div>
    </header>
  );
};
export default Header;
