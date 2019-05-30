import React, { Component } from "react";

import BasicInput from "./BasicInput";
import ExpiryDate from "./ExpiryDate";
import CheckoutButton from "./CheckoutButton";

class PaymentForm extends Component {
  state = {
    nameOnCreditCard: "",
    creditCardNumber: "",
    expirationDate: "",
    CVC: ""
  };

  onSubmit = event => {
    // debugger;
    event.preventDefault();
    this.setState(
      { nameOnCreditCard: event.target.name.value },
      { creditCardNumber: event.target.card.value }
    );
    console.log("i am submitting", event.target.card.value);
  };

  render() {
    return (
      <div className="PaymentForm">
        <form onSubmit={this.onSubmit}>
          <div className="Title">Payment information</div>
          <BasicInput
            name="name"
            label="Name on credit card"
            type="text"
            placeholder="John Smith"
          />
          <BasicInput
            name="card"
            label="Credit card number"
            type="number"
            placeholder="0000 0000 0000 0000"
          />
          <ExpiryDate />
          <CheckoutButton handleSubmit={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default PaymentForm;
