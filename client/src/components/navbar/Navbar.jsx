import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ setSearch }) => {
  return (
    <nav className="navbar">
      <div className="logo">ANKUR</div>
      <div className="search">
        <input
          type="text"
          placeholder="Search by name."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <ul className="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">
          &#9776;
        </label>

        <div className="menu">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/team"}>Team</Link>
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
