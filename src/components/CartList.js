import React, { Component } from "react";

import CartProduct from "./CartProduct";

class CartList extends Component {
  state = {
    myBasketItems: [...this.props.basket]
  };

  render() {
    return (
      <React.Fragment>
        {this.props.basket.map(product => (
          <CartProduct product={product} />
        ))}
      </React.Fragment>
    );
  }
}

export default CartList;
