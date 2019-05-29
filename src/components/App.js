import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import HomaPage from "./Homepage";

class App extends Component {
  state = {
    products: [],
    basket: [],
    selectedProduct: null,
    searchTerm: ""
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
  addToBasket = product => {
    this.setState({
      basket: [...this.state.basket, product]
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar products={this.state.products} basket={this.state.basket} />
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
                addToBasket={this.state.basket}
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
