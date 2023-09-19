import React,{ useContext } from "react";
// import { Link } from "react-router-dom";
import "./Header.css";
import Context from "../ContextStore/Context";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
const Header = (props) => {
  const cartCtx =useContext(Context)
  return (
    
    <header>
      <nav className="nav">
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/store'>Store</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact Us</NavLink>
        <button className="cart" onClick={props.onOpen}>
          Cart
          <span className='cartSpan'>{cartCtx.quantity}</span>
        </button>
      </nav>
    </header>
  );
};
export default Header;
