import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import HomePage from "./Homepage";
import CartList from "./CartList";

class App extends Component {
  state = {
    products: [],
    basket: [],
    selectedProduct: null,
    searchTerm: "",
    user: {
      first_name: "",
      last_name: ""
    }
  };

  addToMyCart = product => {
    const myCart = this.state.basket;
    const cartItem = myCart.find(
      cartItem => cartItem.product.id === product.id
    );
    if (cartItem) {
      cartItem.quantity++;
      this.setState({});
    } else {
      const basket = [...myCart, { product, quantity: 1 }];
      this.setState({ basket });
    }
  };

  removeFromBasket = product => {
    const myCart = this.state.basket;
    const cartItem = myCart.find(
      cartItem => cartItem.product.id === product.id
    );
    if (cartItem && cartItem.quantity > 1) {
      cartItem.quantity--;
      this.setState({});
    } else if (cartItem) {
      this.deleteFromBasket(product);
    }
  };

  deleteFromBasket = product => {
    const myCart = this.state.basket;
    const basket = myCart.filter(
      cartItem => cartItem.product.id !== product.id
    );
    this.setState({ basket });
  };

  // const URL = "localhost/3000"

  componentDidMount() {
    window.removeFromBasket = this.removeFromBasket;
    fetch("http://localhost:3000/products")
      .then(resp => resp.json())
      .then(products => this.setState({ products }));
  }

  viewDetails = product => {
    this.setState({
      selectedProduct: product
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar products={this.state.products} basket={this.state.basket} />
        {/* Switch statement in order to create a 404 Page only in case the URL is wrong */}
        <Switch>
          <Route exact path="/" component={prop => <HomePage />} />
          <Route
            exact
            path="/products"
            component={props => (
              <ProductList
                {...props}
                products={this.state.products}
                viewDetails={this.viewDetails}
                addToMyCart={this.addToMyCart}
              />
            )}
          />
          <Route
            exact
            path="/checkout"
            component={props => (
              <CartList
                {...props}
                basket={this.state.basket}
                deleteFromBasket={this.deleteFromBasket}
                removeFromBasket={this.removeFromBasket}
                addToMyCart={this.addToMyCart}
                // selectedProduct={this.state.selectedProduct}
              />
            )}
          />
          <Route
            path="/products/:id"
            component={props => {
              const id = props.match.params.id;
              const product = this.state.products.find(
                product => product.id == id
              );

              if (this.state.products.length === 0) return <h1>Loading...</h1>;

              if (this.state.products.length > 0 && product === undefined)
                return <h1>Product not found bro!</h1>;

              return (
                <ProductDetails
                  {...props}
                  product={product}
                  addToMyCart={this.addToMyCart}
                />
              );
            }}
          />
          <Route component={props => <h1>404 - not Found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
