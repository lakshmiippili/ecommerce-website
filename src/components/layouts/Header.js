import React from "react";
import Button from "../UI/Button/Button";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="./index.html">Store</a>
        </li>
        <li>
          <a href="./index.html">About</a>
        </li>
        <li align='left'>
          <Button>Cart</Button>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
