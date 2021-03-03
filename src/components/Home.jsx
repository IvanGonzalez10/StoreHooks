import React from 'react';
import { Products } from './Products';
import  initialState from '../initialState';

export const Home = () => {
  return (
    <Products products={initialState.products} />
  );
}