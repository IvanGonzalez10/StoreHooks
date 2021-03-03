import React from 'react';

import '../styles/Header.scss';


export const Header = () => {
  return (
    <div className="header">
      <h1 className='header-title'>Store</h1>
      <div className="header-checkout">
        Checkout
      </div>
    </div>
  );
}