import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Product = props => {
  const { product, addToMyCart, viewDetails } = props;
  return (
    <div
      className="col-md-3 col-sm-6"
      onClick={event => {
        event.preventDefault();
        event.stopPropagation();
        viewDetails(product);
      }}
    >
      <Link to={`/products/${product.id}`}>
        <div className="product-grid4">
          <div className="product-image4">
            <NavLink to="#">
              <img alt="" className="pic-1" src={product.img_url} />
              <img alt="" className="pic-2" src={product.backurl} />
            </NavLink>
            <ul className="social">
              <li>
                <NavLink to="#" data-tip="Quick View">
                  <i className="fa fa-eye" />
                </NavLink>
              </li>
              <li>
                <NavLink to="#" data-tip="Add to Cart">
                  <i className="fa fa-shopping-cart" />
                </NavLink>
              </li>
            </ul>
            <span className="product-new-label">
              {product.new ? "New" : "HOT"}
            </span>
            <span className="product-discount-label">
              -{product.discount}%
            </span>
          </div>
          <div className="product-content">
            <h3 className="title">
              <NavLink to="#">{product.name}</NavLink>
            </h3>
            <div className="price">£{product.price}</div>
            <NavLink
              className="add-to-cart"
              to=""
              onClick={event => {
                event.preventDefault();
                event.stopPropagation();
                addToMyCart(product);
              }}
            >
              ADD TO CART
            </NavLink>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
