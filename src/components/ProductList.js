import React, { Component } from "react";
import Product from "./Product";

class ProductList extends Component {
  
  render() {
    return (
      <div>
        <h1>This is the list of the products</h1>
        <Product handleClick={() => this.props.history.push(`/products/$`)} />
      </div>
    );
  }
}

export default ProductList;

// Put this in <Product /> => <Product handleClick={() => this.props.history.push(`/products/${product.id}`)}/>
