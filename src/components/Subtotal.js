/** @format */

import React from 'react';
import { useHistory } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';

// CSS
import './subtotal.scss';

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();
  console.log('BASKET FOR CEHCKOUT', basket);

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
      <button
        type='submit'
        className='subtotal__btn'
        onClick={e => history.push('/payment')}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
