import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

import '../styles/Layout.scss';


export const Layout = ({ children }) => {
  return (
    <div className='main'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
