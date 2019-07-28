import React from "react";

const MiniBasket = props => {
  const { cartProduct } = props;
  return (
    <React.Fragment>
      <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 className="my-0">{cartProduct.name}</h6>
          <small className="text-muted">Brief description</small>
        </div>
        <span className="text-muted">£{cartProduct.price}</span>
      </li>
    </React.Fragment>
  );
};

export default MiniBasket;
