import React from "react";
import { NavLink } from "react-router-dom";

// import Search from "./Search";

const Navbar = props => (
  <React.Fragment>
    <nav className="navbar navbar-expand-lg navbar-light bg-light static-top">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img
            src="https://cdn1.imggmi.com/uploads/2019/5/30/3be4aa22ee5f928eff89879d7f2d8b94-full.png"
            alt="logo"
          />
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
                <span className="sr-only">current</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/checkout"
                className="nav-link fa fa-shopping-basket"
              >
                <span>{props.basket.length}</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </React.Fragment>
);

export default Navbar;
