/** @format */

import React from 'react';
import Subtotal from '../components/Subtotal';

// CSS
import './checkout.scss';

function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <h2 className='checkout__title'>Your Shopping Basket</h2>
      </div>
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
