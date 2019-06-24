import React, { Component } from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className="breadcrumb">
          <li>
            <Link to="/">Home</Link> <span className="divider">/</span>
          </li>
          <li>
            <Link to="/products">Products</Link>{" "}
            <span className="divider">/</span>
          </li>
        </ul>
        <div className="container">
          <div className="row">
            {this.props.products.map(product => (
              <Product
                key={product.id}
                product={product}
                addToMyCart={this.props.addToMyCart}
                viewDetails={this.props.viewDetails}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;

// Put this in <Product /> => <Product handleClick={() => this.props.history.push(`/products/${product.id}`)}/>
