import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav_logo">
                <h2>Shopping Cart</h2>
            </div>

            <ul className="nav_links">
                <li>
                    <Link to="/cart" className="cart_link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            <span className="cartlogo_v">
                                0
                            </span>
                        </span>
                       
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        shop
                        
                    </Link>
                </li>
            </ul>

            <div className="hamburger_menu">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar;