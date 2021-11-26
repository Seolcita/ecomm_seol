/** @format */

import React from 'react';
import CurrencyFormat from 'react-currency-format';

// CSS
import './subtotal.scss';

function Subtotal() {
  return (
    <div className='subtotal'>
      <h2 className='subtotal__title'>Sub Total</h2>
      <CurrencyFormat
        renderText={value => (
          <p className='subtotal__amount'>
            {/* Subtotal ({basket.length} items) :<strong>{` ${value}`}</strong> */}
            Subtotal (0 items) : <strong> 0 </strong>
          </p>
        )}
        decimalScale={2}
        // value={getBasketTotal(basket)}
        value={0}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button type='submit' className='subtotal__btn'>
        Payment
      </button>
    </div>
  );
}

export default Subtotal;
