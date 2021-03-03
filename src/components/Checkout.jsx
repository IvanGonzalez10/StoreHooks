import React from "react";
import { Link } from "react-router-dom";
import "../styles/Checkout.scss";

export const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout-content">
        <h3>Lista de pedidos:</h3>
        <div className="checkout-item">
          <div className="checkout-element">
            <h4>Item name</h4>
            <span>$10</span>
          </div>
          <button type="button"><i className='fas fa-trash-alt'></i></button>
        </div>
      </div>
      <div className="checkout-sidebar">
        <h3>Precio total: $10</h3>
        <Link to='/checkout/information'>
          <button type="button">Continuar pedido</button>
        </Link>
      </div>
    </div>
  );
};
