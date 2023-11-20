import React from "react";
import "./navbar.css";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="logo">MUO</div>
      <div className="search">
        <input type="text" placeholder="search user name" />
      </div>

      <ul class="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger">
          &#9776;
        </label>

        <div class="menu">
          <li>
           <Link to={"/"}>Home</Link>
          </li>
          <li>
           <Link to={"/"}>About</Link>
          </li>

          <li>
           <Link to={"/"}>Pricing</Link>
          </li>
          <li>
           <Link to={"/"}>Contact</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
