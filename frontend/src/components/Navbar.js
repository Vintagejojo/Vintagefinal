import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";

//  Given an object, using the destructuring syntax you can extract
//  just some values and put them into named variables:




const Navbar = ({ click }) => {
  //array  of objects 
  const { cart } = useContext(AppContext);

  console.log(cart);

  return (
    <nav className="navbar">
      <div className="nav_logo">
        <h2>Retro Console Store</h2>
      </div>

      <ul className="nav_links">
        <li>
          <Link to="/about">
            <p className="nav_text_mods">About</p>
          </Link>
        </li>
        <li>
          <Link to="/blog">
            <p className="nav_text_mods">Blog</p>
          </Link>
        </li>

        <li>
          <Link to="/">
            <p className="nav_text_mods">Home</p>
          </Link>
        </li>
        <li>
          <Link to="/contactus">
            <p className="nav_text_mods">Contact Us</p>
          </Link>
        </li>
        <li>
          <Link to="/cart" className="cart_link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              <span className="cartlogo_v">{cart.length}</span>
            </span>
          </Link>
        </li>
      </ul>

      <div className="hamburger_menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
