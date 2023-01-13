import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <body>
    <nav className="navbar-expand-xxl navbar-light bg-light">
      <div class="container-fluid">
        <ul className="navbar bg-light">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/employees" className="nav-link">
              Employees List
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/stores" className="nav-link">
              Store List
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </body>
  );
};

export default Header;
