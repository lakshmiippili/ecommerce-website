import React,{ useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Context from "../store/Context";
const Header = (props) => {
  const cartCtx =useContext(Context)
  return (
    
    <header>
      <div className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/store">Store</NavLink>
        <NavLink to="/about">About</NavLink>
        <button className="cart" onClick={props.onOpen}>
          Cart
          <span className='cartSpan'>{cartCtx.quantity}</span>
        </button>
      </div>
    </header>
  );
};
export default Header;
