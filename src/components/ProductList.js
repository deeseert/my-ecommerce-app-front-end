import React, { Component } from "react";
import Product from "./Product";
class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className="breadcrumb">
          <li>
            <a href="/">Home</a> <span className="divider">/</span>
          </li>
          <li>
            <a href="/products">Products</a> <span className="divider">/</span>
          </li>
        </ul>
        <div className="container">
          <div className="row">
            {this.props.products.map(product => (
              <Product
                key={product.id}
                product={product}
                addToMyCart={this.props.addToMyCart}
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
