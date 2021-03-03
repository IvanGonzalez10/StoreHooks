import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";

export const Header = () => {
  return (
    <div className="header">
      <h1 className="header-title">
        <Link to='/'>
        Store
        </Link>
        </h1>
      <div className="header-checkout">
        <Link to="/checkout">
          <i className='fas fa-shopping-basket'></i>
        </Link>
      </div>
    </div>
  );
};
