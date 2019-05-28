import React, { Component } from 'react';

import { Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";

class App extends Component {

  state = {
    searchTerm: "",
    products: []
  }

  render() { 
    return (
    <div className="App">
      <Navbar
        title="I'm the Navbar"
        subtitle="Put here other stuff"
        colour="orange"
        icon="american sign language interpreting"
      />
      {/* Switch statement in order to create a 404 Page only in case the URL is wrong */}
      <Switch>
        <Route exact path="/" component={prop => <h1>Home Page</h1>} />
        <Route exact path="/products" component={props => <ProductList {...props} />} />
        {/* This below is the prop that will have id in params */}
        <Route exact path="/products/:id" component={props => {
          const id = props.match.params.id
          const product = this.state.products.find(product =>product.id === id)
          // console.log(id)
          if (this.state.products === 0) return <h1>Loading...</h1>
          if (this.state.products > 0 && product === undefined) return <h1>Product not found bro!</h1>  
          
          return <ProductDetails {...props} product={product} />
        }} />
        <Route component={props => <h1>404 - not Found</h1>} />
      </Switch>
    </div>
  );
  }
}
 
export default App;