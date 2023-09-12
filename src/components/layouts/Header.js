import React,{ useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Context from "../ContextStore/Context";
const Header = (props) => {
  const cartCtx =useContext(Context)
  return (
    
    <header>
      <div className="nav">
        <Link to='/home'>Home</Link>
        <Link to='/store'>Store</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact Us</Link>
        <button className="cart" onClick={props.onOpen}>
          Cart
          <span className='cartSpan'>{cartCtx.quantity}</span>
        </button>
      </div>
    </header>
  );
};
export default Header;
