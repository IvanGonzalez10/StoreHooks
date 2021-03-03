import React from 'react';
import '../styles/Payment.scss'

export const Payment = () => {
  return (
    <div className="payment">
      <div className="payment-content">
        <h3>Resumen del pedido:</h3>
        <div className="payment-button">
          Boton de pago con paypal
        </div>
      </div>
    </div>
  );
}