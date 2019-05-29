import React from "react";
import { NavLink } from "react-router-dom";

const CartProduct = props => {
  const { product, handleClick, addToMyCart } = props;
  return (
    <React.Fragment>
      <div className="col-md-3 col-sm-6">
        {/* <Product handleClick={() => this.props.history.push(`/products/$`)} /> */}
        <div className="product-grid4">
          <div className="product-image4">
            <NavLink to="#">
              <img className="pic-1" src={product.img_url} />
              <img className="pic-2" src={product.backurl} />
            </NavLink>
            <ul className="social">
              <li>
                <NavLink to="#" data-tip="Quick View">
                  <i className="fa fa-eye" />
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="#" data-tip="Add to Wishlist">
                  <i className="fa fa-shopping-bag" />
                </NavLink>
              </li> */}
              <li>
                <NavLink to="#" data-tip="Add to Cart">
                  <i className="fa fa-shopping-cart" />
                </NavLink>
              </li>
            </ul>
            <span className="product-new-label">
              {product.new ? "New" : "HOT"}{" "}
            </span>
            <span className="product-discount-label">-{product.discount}%</span>
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
                addToMyCart(product);
              }}
            >
              ADD TO CART
            </NavLink>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartProduct;
