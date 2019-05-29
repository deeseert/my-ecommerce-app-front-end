import React from "react";
import { Link } from "react-router-dom";

const ProductDetails = props => {
  return (
    <div className="container">
      <div className="card">
        <div className="container-fliud">
          <div className="wrapper row">
            <div className="preview col-md-6">
              <div className="preview-pic tab-content">
                <div className="tab-pane active" id="pic-1">
                  <img src={props.product.img_url} />
                </div>
                <div className="tab-pane" id="pic-2">
                  <img src={props.product.backurl} />
                </div>
              </div>
              <ul className="preview-thumbnail nav nav-tabs">
                <li className="active">
                  <a data-target="#pic-1" data-toggle="tab">
                    <img src={props.product.img_url} />
                  </a>
                </li>
                <li>
                  <a data-target="#pic-2" data-toggle="tab">
                    <img src={props.product.backurl} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="details col-md-6">
              <h3 className="product-title">{props.product.name}</h3>
              <p className="product-description">{props.product.description}</p>
              <h3 className="price">
                current price: <span>£{props.product.price}</span>
              </h3>
              <div className="action">
                <button className="add-to-cart btn btn-default" type="button">
                  add to cart
                </button>
                <Link to="/products">
                  <button className="like btn btn-default" type="button">
                    <span className="fa fa-arrow-left" />
                  </button>
                </Link>
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
