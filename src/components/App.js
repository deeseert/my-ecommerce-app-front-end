import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import HomaPage from "./Homepage";
import CartList from "./CartList";

class App extends Component {
  state = {
    products: [],
    basket: [],
    selectedProduct: null,
    searchTerm: ""
  };

  addToMyCart = product => {
    console.log("Add To Card Clicked!!!!");
    const myCart = this.state.basket;
    const productFound = myCart.find(item => item.id === product.id);
    if (!productFound) {
      this.setState({ basket: [...this.state.basket, product] });
    }
  };

  // const URL = "localhost/3000"

  componentDidMount() {
    fetch("http://localhost:3000/products")
      .then(resp => resp.json())
      .then(products => this.setState({ products }));
  }

  viewdetails = product => {
    this.setState({
      selectedProduct: product
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        {/* Switch statement in order to create a 404 Page only in case the URL is wrong */}
        <Switch>
          <Route exact path="/" component={prop => <HomaPage />} />
          <Route
            exact
            path="/products"
            component={props => (
              <ProductList
                {...props}
                products={this.state.products}
                handleClick={this.viewdetails}
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
                // selectedProduct={this.state.selectedProduct}
              />
            )}
          />
          {/* This below is the prop that will have id in params */}
          <Route
            exact
            path="/products/:id"
            component={props => {
              const id = props.match.params.id;
              const product = this.state.products.find(
                product => product.id === id
              );
              // console.log(id)
              if (this.state.products === 0) return <h1>Loading...</h1>;
              if (this.state.products > 0 && product === undefined)
                return <h1>Product not found bro!</h1>;

              return <ProductDetails {...props} product={product} />;
            }}
          />
          <Route component={props => <h1>404 - not Found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
