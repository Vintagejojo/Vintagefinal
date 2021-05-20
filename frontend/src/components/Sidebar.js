import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = ({ show }) => {
  const sideBarClass = ["sidebar"];
  if (show) {
    sideBarClass.push("show");
  }
  return (
    <div className={sideBarClass.join(" ")}>
      <ul className="sidebar_links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="sidebar_cart">0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/contactus">Contact Us :)</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
