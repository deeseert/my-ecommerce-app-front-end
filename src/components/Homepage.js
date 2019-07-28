// import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const HomePage = props => (
  <React.Fragment>
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to="1" />
        <li data-target="#carouselExampleIndicators" data-slide-to="2" />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="https://cdn1.imggmi.com/uploads/2019/5/30/c799acb0f79328a80b70197af6a89bee-full.jpg"
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://cdn1.imggmi.com/uploads/2019/5/30/4a4fc595e55a7c5cb8e3e58a179c6f45-full.jpg"
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://cdn1.imggmi.com/uploads/2019/5/30/52bbb19fb3749e82de9e8d4dfefb5ea7-full.jpg"
            alt="Third slide"
          />
        </div>
      </div>
      <Link
        className="carousel-control-prev"
        to="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </Link>
      <Link
        className="carousel-control-next"
        to="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </Link>
    </div>
    <hr className="half-rule" />
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <img
            className="d-block w-100"
            src="https://cdn1.imggmi.com/uploads/2019/5/30/19474091a323a4bb66c4b134e9af16b4-full.jpg"
            alt="Third slide"
          />
        </div>
        <div className="col-sm">
          <img
            className="d-block w-100"
            src="https://cdn1.imggmi.com/uploads/2019/5/30/3c35827a1af5b1dda5fe1496a7c3b56a-full.jpg"
            alt="Third slide"
          />
        </div>
        <div className="col-sm">
          <img
            className="d-block w-100"
            src="https://cdn1.imggmi.com/uploads/2019/5/30/cefebe8cde986f996bd1ddc4d99dbcd6-full.jpg"
            alt="Third slide"
          />
        </div>
      </div>
    </div>
    <hr className="half-rule" />

    {/* ------------------footer---------------------------------- */}

    <section id="footer">
      <div className="container">
        <div className="row text-center text-xs-center text-sm-left text-md-left">
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Quick links</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <Link to="#">
                  <i className="fa fa-angle-double-right" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-angle-double-right" />
                  About
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-angle-double-right" />
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-angle-double-right" />
                  Get Started
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-angle-double-right" />
                  Videos
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Quick links</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <Link to="#">
                  <i className="fa fa-angle-double-right" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-angle-double-right" />
                  About
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-angle-double-right" />
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-angle-double-right" />
                  Get Started
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-angle-double-right" />
                  Videos
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Quick links</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <Link to="#">
                  <i className="fa fa-angle-double-right" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-angle-double-right" />
                  About
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-angle-double-right" />
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-angle-double-right" />
                  Get Started
                </Link>
              </li>
              <li>
                <Link
                  to="https://wwwe.sunlimetech.com"
                  title="Design and developed by"
                >
                  <i className="fa fa-angle-double-right" />
                  Imprint
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
            <ul className="list-unstyled list-inline social text-center">
              <li className="list-inline-item">
                <Link to="#">
                  <i className="fa fa-facebook" />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#">
                  <i className="fa fa-twitter" />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#">
                  <i className="fa fa-instagram" />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#">
                  <i className="fa fa-google-plus" />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#" target="_blank">
                  <i className="fa fa-envelope" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <p>
              <u>
                <Link to="#">Sam & Gio Ltd</Link>
              </u>{" "}
              Sam and Gio's website
            </p>
            <p className="h6">
              &copy All right Reversed.
              <Link className="text-green ml-2">Sam & Gio</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default HomePage;
