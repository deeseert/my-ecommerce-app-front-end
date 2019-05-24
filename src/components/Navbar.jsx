import React from "react";

// import Search from "./Search";

const Navbar = props => (
  <div className={`ui inverted ${props.colour} menu`}>
    <a className="item">
      <h2 className="ui header">
        <i className={`${props.icon} icon`} />
        <div className="content">{props.title}</div>
        <div className="sub header">{props.subtitle}</div>
      </h2>
    </a>
    <div>{/* <Search handleSearch={props.handleSearch} /> */}</div>
  </div>
);

export default Navbar;
