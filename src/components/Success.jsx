import React from 'react';
import '../styles/Success.scss'

export const Success = () => {
  return (
    <div className="success">
      <div className="success-content">
        <h2>Gracias por tu compra</h2>
        <span>Tu pedido llegara en tres dias a tu direccion</span>
        <div className="success-map">
          Google maps
        </div>
      </div>
    </div>
  );
}