import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "../styles/Header.scss";

export const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;
  return (
    <div className="header">
      <h1 className="header-title">
        <Link to="/">Store</Link>
      </h1>
      <div className="header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket"></i>
        </Link>
        {cart.length > 0 && <div className="header-alert">{cart.length}</div>}
      </div>
    </div>
  );
};
