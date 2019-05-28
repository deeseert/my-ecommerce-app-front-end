import React, { Component } from "react";
import Product from "./Product";
class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <ul class="breadcrumb">
          <li>
            <a href="/">Home</a> <span class="divider">/</span>
          </li>
          <li>
            <a href="/products">Products</a> <span class="divider">/</span>
          </li>
        </ul>
        <div className="container">
          <div className="row">
            {this.props.products.map(product => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;

// Put this in <Product /> => <Product handleClick={() => this.props.history.push(`/products/${product.id}`)}/>
