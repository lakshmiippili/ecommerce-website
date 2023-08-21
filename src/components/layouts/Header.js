import React,{ useContext } from "react";
import { Link ,NavLink} from "react-router-dom";
import "./Header.css";
import Context from "../ContextStore/Context";
const Header = (props) => {
  const cartCtx =useContext(Context)
  return (
    
    <header>
      <div className="nav">
        <a href='/home'>Home</a>
        <Link to='/store'>Store</Link>
        <NavLink to='/about'>About</NavLink>
        <button className="cart" onClick={props.onOpen}>
          Cart
          <span className='cartSpan'>{cartCtx.quantity}</span>
        </button>
      </div>
    </header>
  );
};
export default Header;
