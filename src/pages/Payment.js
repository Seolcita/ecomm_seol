/** @format */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer';

import CheckoutProduct from '../components/CheckoutProduct';

// CSS
import './payment.scss';

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('');

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleChange = e => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : '');
    //
  };

  return (
    <div className='payment'>
      <div className='payment__container'>
        <div>
          <h2 className='payment__title--main'>
            Process Payment
            <Link to='/checkout'>
              <small> ({basket?.length} items)</small>
            </Link>
          </h2>
        </div>
        <div className='payment__wrap'>
          <div className='payment__left'>
            <div className='payment__summary'>
              <h4 className='payment__title--sub'>Review Items</h4>
              {basket.map(item => {
                const { id, title, image, rating, price } = item;

                return (
                  <CheckoutProduct
                    id={id}
                    title={title}
                    image={image}
                    rating={rating}
                    price={price}
                  />
                );
              })}
            </div>
          </div>
          <div className='payment__right'>
            <div className='payment__address'>
              <h4 className='payment__title--sub'>Shipping Address</h4>

              <p>123 Molaris Park SW, Toronto, Canada</p>
            </div>
            <div className='payment__detail'>
              <h4 className='payment__title--sub'>Payment Method</h4>
              <div className='payment__info'>
                <form onClick={handleSubmit}>
                  <CardElement onChange={handleChange} />
                  <div className='payment__priceContainer'>
                    <CurrencyFormat
                      renderText={value => <h5>Order Total: {value}</h5>}
                      decimalScale={2}
                      value={getBasketTotal(basket)}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'$'}
                    />
                    <button disabled={processing || disabled || succeeded}>
                      <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
