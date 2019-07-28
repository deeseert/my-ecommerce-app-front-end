import React, { Component } from "react";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";

class CartList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <table id="cart" className="table table-hover table-condensed">
            <thead>
              <tr>
                <th style={{ width: "50%" }}>Product</th>
                <th style={{ width: "10%" }}>Price</th>
                <th
                  style={{
                    width: "8 %"
                  }}
                >
                  Quantity
                </th>
                <th style={{ width: "22%" }} className="text-center">
                  Subtotal
                </th>
                <th style={{ width: "10%" }} />
              </tr>
            </thead>
            <tbody>
              {this.props.basket.length === 0 ? (
                <div class="alert alert-danger large" role="alert">
                  You don't have any product in your basket
                </div>
              ) : (
                this.props.basket.map(cartProduct => (
                  <CartProduct
                    cartProduct={cartProduct}
                    deleteFromBasket={this.props.deleteFromBasket}
                    removeFromBasket={this.props.removeFromBasket}
                    addToMyCart={this.props.addToMyCart}
                    calculateTotalCost={this.calculateTotalCost}
                    changeQuantity={this.changeQuantity}
                  />
                ))
              )}
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <Link to="/products" className="btn btn-warning">
                    <i className="fa fa-angle-left" /> Continue Shopping
                  </Link>
                </td>
                <td colSpan="2" className="hidden-xs" />
                <td className="hidden-xs text-center">
                  <strong>Total: {this.props.cartProduct}</strong>
                </td>
                <td>
                  <Link to="/products" className="btn btn-success btn-block">
                    Checkout
                    <i className="fa fa-angle-right" />
                  </Link>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default CartList;
