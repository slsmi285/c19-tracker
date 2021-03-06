import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light big-light">
      
      <div>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/signin"
              className={window.location.pathname === "/signin" ? "nav-link active" : "nav-link"}
            >
              SignIn
            </Link>
          </li>


          <li className="nav-item">
            <Link
              to="/search"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/information"
              className={window.location.pathname === "/information" ? "nav-link active" : "nav-link"}
            >
             Best Practices
            </Link>
          </li>

         

        </ul>


      </div>
    </nav>
  );
}
export default Navbar;