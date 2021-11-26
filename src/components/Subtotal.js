/** @format */

import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';

// CSS
import './subtotal.scss';

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  console.log('BASKET FOR CEHCKOUT', basket);

  // const getBasketTotal = basket =>
  //   basket.map(price => reducer((prev, curr) => prev + curr));
  return (
    <div className='subtotal'>
      <h2 className='subtotal__title'>Subtotal</h2>
      <CurrencyFormat
        renderText={value => (
          <p className='subtotal__amount'>
            Subtotal ({basket.length} items) :<strong>{value}</strong>
          </p>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
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
