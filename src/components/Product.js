import React from "react";
import { Link } from "react-router-dom";

const Product = props => {
  const { product, handleClick } = props;
  return (
    <div className="col-md-3 col-sm-6">
      {/* <Product handleClick={() => this.props.history.push(`/products/$`)} /> */}
      <Link to={`/products/${product.id}`}>
        <div className="product-grid4">
          <div className="product-image4">
            <p>
              <img className="pic-1" src={product.img_url} />
              <img className="pic-2" src={product.backurl} />
            </p>
            <ul className="social">
              <li>
                <a data-tip="Quick View">
                  <i className="fa fa-eye" />
                </a>
              </li>
              {/* <li>
                <a  data-tip="Add to Wishlist">
                  <i className="fa fa-shopping-bag" />
                </a>
              </li> */}
              <li>
                <a data-tip="Add to Cart">
                  <i className="fa fa-shopping-cart" />
                </a>
              </li>
            </ul>
            <span className="product-new-label">
              {product.new ? "New" : "HOT"}{" "}
            </span>
            <span className="product-discount-label">-{product.discount}%</span>
          </div>
          <div className="product-content">
            <h3 className="title">
              <p>{product.name}</p>
            </h3>
            <div className="price">£{product.price}</div>
            <p
              className="add-to-cart"
              onClick={event => {
                event.preventDefault();
                event.stopPropagation();
                props.addToBasket(props.product.id);
              }}
            >
              ADD TO CART
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
