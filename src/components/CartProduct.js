import React, { Component } from "react";
import { Link } from "react-router-dom";

class CartProduct extends Component {
  // state = {
  //   quantity: 1,
  //   subtotal: 0
  // };

  // changeQuantity = event => {
  //   this.setState({
  //     quantity: parseInt(event.target.value)
  //   });
  // };
  render() {
    // let subtotal = product.price * this.state.quantity;
    let {
      cartProduct,
      deleteFromBasket,
      removeFromBasket,
      addToMyCart
    } = this.props;
    const { product } = cartProduct;
    return (
      
//        <React.Fragment>
//       <div className="col-md-3 col-sm-6">
//         {/* <Product handleClick={() => this.props.history.push(`/products/$`)} /> */}
//         <div className="product-grid4">
//           <div className="product-image4">
//             <NavLink to="#">
//               <img className="pic-1" src={product.img_url} />
//               <img className="pic-2" src={product.backurl} />
//             </NavLink>
//             <ul className="social">
//               <li>
//                 <NavLink to="#" data-tip="Quick View">
//                   <i className="fa fa-eye" />
//                 </NavLink>
//               </li>
//               {/* <li>
//                 <NavLink to="#" data-tip="Add to Wishlist">
//                   <i className="fa fa-shopping-bag" />
//                 </NavLink>
//               </li> */}
//               <li>
//                 <NavLink to="#" data-tip="Add to Cart">
//                   <i className="fa fa-shopping-cart" />
//                 </NavLink>
//               </li>
//             </ul>
//             <span className="product-new-label">
//               {product.new ? "New" : "HOT"}{" "}
//             </span>
//             <span className="product-discount-label">-{product.discount}%</span>
//           </div>
//           <div className="product-content">
//             <h3 className="title">
//               <NavLink to="#">{product.name}</NavLink>
//             </h3>
//             <div className="price">£{product.price}</div>
//             <NavLink
//               className="add-to-cart"
//               to=""
//               onClick={event => {
//                 event.preventDefault();
//                 addToMyCart(product);
//               }}
//             >
//               REMOVE FROM THE CART
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     </React.Fragment>
      
      
      <React.Fragment>
        <tr>
          <td data-th="Product">
            <div className="row">
              <div className="col-sm-2 hidden-xs">
                <img
                  src={product.img_url}
                  alt={product.name}
                  className="img-responsive"
                />
              </div>
              <div className="col-sm-10">
                <Link to={product}>
                  <h4 className="nomargin">{product.name}</h4>
                </Link>
                <p>{product.description}</p>
              </div>
            </div>
          </td>
          <td data-th="Price">£{product.price}</td>
          <td data-th="Quantity">
            <div class="def-number-input number-input safari_only">
              <button class="minus" onClick={() => removeFromBasket(product)} />
              <input
                class="quantity"
                min="0"
                name="quantity"
                value={cartProduct.quantity}
                type="number"
              />
              <button class="plus" onClick={() => addToMyCart(product)} />
            </div>
            {/* <input
              type="number"
              className="form-control text-center"
              value={cartProduct.quantity}
            /> */}
          </td>
          <td data-th="Subtotal" className="text-center">
            £{product.price * cartProduct.quantity}
          </td>
          <td className="actions" data-th="">
            <button className="btn btn-danger btn-sm">
              <i
                className="fa fa-trash-o"
                onClick={() => deleteFromBasket(product)}
              />
            </button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}


export default CartProduct;
