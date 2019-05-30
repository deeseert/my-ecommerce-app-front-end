import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";

import Checkout from "./payment-form-components/Chekout";
import SignUpSuccess from "./payment-form-components/SignUpSuccess";

class CartList extends Component {
  state = {};

  // handleSubmit = () => {
  //   console.log("Submit clicked in the payment field");
  // };

  // handleSubmitForm = event => {
  //   event.preventDefault();
  //   console.log("Submit clicked in the payment field");
  // };

  render() {
    return (
      <div>
        <Switch>
          
          <Route
            exact
            path={"/checkout"}
            component={props => (
              <Checkout
                {...props}
                basket={this.props.basket}
                handleSubmit={this.handleSubmit}
                handleSubmitForm={this.handleSubmitForm}
              />
            )}
          />

          <Route path={"/order-submitted"} component={props => ({ ...props })}>
            <SignUpSuccess />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default CartList;
