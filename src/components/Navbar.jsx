import React from "react";
import { NavLink } from "react-router-dom";

// import Search from "./Search";

const Navbar = props => (
  <React.Fragment>
    <nav className="navbar navbar-expand-lg navbar-light bg-light static-top">
      <div className="container">
        <NavLink className="navbar-brand" to="#">
          <img src="http://placehold.it/150x50?text=Logo" alt="" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home
                <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/checkout">
                Checkout
              </NavLink>
            </li>
            <li>
              <NavLink className="p-3 mb-2 bg-danger text-white">
                {props.basket.length}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </React.Fragment>
);

export default Navbar;
