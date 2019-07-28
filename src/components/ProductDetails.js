import React from "react";
// import Product from "./Product";
import { Link } from "react-router-dom";

const ProductDetails = props => {
  const { product, addToMyCart } = props;
  return (
    <div className="container">
      <div className="card">
        <div className="container-fliud">
          <div className="wrapper row">
            <div className="preview col-md-6">
              <div className="preview-pic tab-content">
                <div className="tab-pane active" id="pic-1">
                  <img alt="" src={product.img_url} />
                </div>
                <div className="tab-pane" id="pic-2">
                  <img alt="" src={product.backurl} />
                </div>
              </div>
              <ul className="preview-thumbnail nav nav-tabs">
                <li className="active">
                  <Link data-target="#pic-1" data-toggle="tab">
                    <img alt="" src={product.img_url} />
                  </Link>
                </li>
                <li>
                  <Link data-target="#pic-2" data-toggle="tab">
                    <img alt="" src={product.backurl} />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="details col-md-6">
              <h3 className="product-title">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <h3 className="price">
                current price: <span>£{product.price}</span>
              </h3>
              <div className="action">
                <button
                  className="add-to-cart btn btn-default"
                  type="button"
                  onClick={event => {
                    event.preventDefault();
                    addToMyCart(product);
                  }}
                >
                  add to cart
                </button>
                <Link to="/products">
                  <button className="like btn btn-default" type="button">
                    <span className="fa fa-arrow-left" />
                  </button>
                </Link>
              </div>
              <div id="accordion">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        RETURNS INFO
                      </button>
                    </h5>
                  </div>

                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      UK returns are free and easy! We hope you are satisfied
                      with all of your purchases but if you ever need to
                      return an item, you can do so within 14 days from the
                      date your parcel arrived. Please note, we cannot offer
                      refunds on cosmetics and pierced jewellery or on
                      swimwear and lingerie if the hygiene seal is not in
                      place or has been broken. Great news! We now offer a
                      FREE Collect+ returns service via over 5,500 local
                      stores nationwide. Click here to view our full Returns
                      Policy.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

//TODO
//On the button "Go Back" create the event onClick={() => props.history.pus('/products')}
//You could also use <link> => <Link to='/products'><button>Go Back<button></link>
