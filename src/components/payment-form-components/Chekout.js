import React, { Component } from "react";

// import CartProduct from "../CartProduct";
// import SignUpFormPage from "./SignUpForm";
import SignUpSuccess from "./SignUpSuccess";
import MiniBasket from "./MiniBasket";

class Checkout extends Component {
  state = {
    submitted: false
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({ submitted: true });
    console.log("I am the Checkout", event.target.name.value);
  };

  render() {
    if (this.state.submitted) {
      return <SignUpSuccess />;
    } else
      return (
        <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="col-md-4 order-md-2 mb-4">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-muted">Your cart</span>
                  <span className="badge badge-secondary badge-pill">3</span>
                </h4>
                <ul className="list-group mb-3">
                  {this.props.basket.map(cartProduct => (
                    <MiniBasket cartProduct={cartProduct} />
                  ))}
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Total (GBP)</span>
                    <strong>{"coming soon"}</strong>
                  </li>
                </ul>
                <form className="card p-2">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Promo code"
                    />
                  </div>
                </form>
              </div>
              <div className="col-md-8 order-md-1">
                <h4 className="mb-3">Billing address</h4>
                <form
                  onSubmit={this.onSubmit}
                  className="needs-validation"
                  novalidate=""
                >
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label for="firstName">First name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder=""
                        value=""
                        required=""
                      />
                      <div className="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label for="lastName">Last name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder=""
                        value=""
                        required=""
                      />
                      <div className="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label for="username">Username</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">@</span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Username"
                        required=""
                      />
                      <div className="invalid-feedback" style={{ width: 100 }}>
                        Your username is required.
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label for="email">
                      Email <span className="text-muted">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="you@example.com"
                    />
                    <div className="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label for="address">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="1234 Main St"
                      required=""
                    />
                    <div className="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label for="address2">
                      Address 2 <span className="text-muted">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address2"
                      placeholder="Apartment or suite"
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-5 mb-3">
                      <label for="country">Country</label>
                      <select
                        className="custom-select d-block w-100"
                        id="country"
                        required=""
                      >
                        <option value="">Choose...</option>
                        <option>United States</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select a valid country.
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <label for="state">State</label>
                      <select
                        className="custom-select d-block w-100"
                        id="state"
                        required=""
                      >
                        <option value="">Choose...</option>
                        <option>California</option>
                      </select>
                      <div className="invalid-feedback">
                        Please provide a valid state.
                      </div>
                    </div>
                    <div className="col-md-3 mb-3">
                      <label for="zip">Zip</label>
                      <input
                        type="text"
                        className="form-control"
                        id="zip"
                        placeholder=""
                        required=""
                        autocomplete="off"
                      />
                      <div className="invalid-feedback">Zip code required.</div>
                    </div>
                  </div>
                  <hr className="mb-4" />
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="same-address"
                    />
                    <label className="custom-control-label" for="same-address">
                      Shipping address is the same as my billing address
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="save-info"
                    />
                    <label className="custom-control-label" for="save-info">
                      Save this information for next time
                    </label>
                  </div>
                  <hr className="mb-4" />
                  <h4 className="mb-3">Payment</h4>
                  <div className="d-block my-3">
                    <div className="custom-control custom-radio">
                      <input
                        id="credit"
                        name="paymentMethod"
                        type="radio"
                        className="custom-control-input"
                        checked=""
                        required=""
                      />
                      <label className="custom-control-label" for="credit">
                        Credit card
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        id="debit"
                        name="paymentMethod"
                        type="radio"
                        className="custom-control-input"
                        required=""
                      />
                      <label className="custom-control-label" for="debit">
                        Debit card
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        id="paypal"
                        name="paymentMethod"
                        type="radio"
                        className="custom-control-input"
                        required=""
                      />
                      <label className="custom-control-label" for="paypal">
                        PayPal
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label for="cc-name">Name on card</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-name"
                        placeholder=""
                        required=""
                      />
                      <small className="text-muted">
                        Full name as displayed on card
                      </small>
                      <div className="invalid-feedback">
                        Name on card is required
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label for="cc-number">Credit card number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-number"
                        placeholder=""
                        required=""
                      />
                      <div className="invalid-feedback">
                        Credit card number is required
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 mb-3">
                      <label for="cc-expiration">Expiration</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-expiration"
                        placeholder=""
                        required=""
                      />
                      <div className="invalid-feedback">
                        Expiration date required
                      </div>
                    </div>
                    <div className="col-md-3 mb-3">
                      <label for="cc-expiration">CVV</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-cvv"
                        placeholder=""
                        required=""
                      />
                      <div className="invalid-feedback">
                        Security code required
                      </div>
                    </div>
                  </div>
                  <hr className="mb-4" />
                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                  >
                    Continue to checkout
                  </button>
                </form>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
  }
}

export default Checkout;
