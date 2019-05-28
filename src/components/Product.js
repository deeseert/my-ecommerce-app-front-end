import React from "react";

const Product = props => {
  const { product, handleClick } = props;
  return (
    <React.Fragment>
      <div className="col-md-3 col-sm-6">
        {/* <Product handleClick={() => this.props.history.push(`/products/$`)} /> */}
        <div className="product-grid4">
          <div className="product-image4">
            <a href="#">
              <img className="pic-1" src={product.img_url} />
              <img className="pic-2" src={product.backurl} />
            </a>
            <ul className="social">
              <li>
                <a href="#" data-tip="Quick View">
                  <i className="fa fa-eye" />
                </a>
              </li>
              {/* <li>
                <a href="#" data-tip="Add to Wishlist">
                  <i className="fa fa-shopping-bag" />
                </a>
              </li> */}
              <li>
                <a href="#" data-tip="Add to Cart">
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
              <a href="#">{product.name}</a>
            </h3>
            <div className="price">£{product.price}</div>
            <a className="add-to-cart" href="">
              ADD TO CART
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Product;
