import React, { Component } from "react";

class ProductDetails extends Component {
  // state = {}
  render() {
    return <h1>This is the single page product with all the details!!</h1>;
  }
}

export default ProductDetails;


//TODO 
//On the button "Go Back" create the event onClick={() => props.history.pus('/products')}
//You could also use <link> => <Link to='/products'><button>Go Back<button></link>