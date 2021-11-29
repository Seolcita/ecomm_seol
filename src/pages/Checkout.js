/** @format */

import React from 'react';
import { useStateValue } from '../StateProvider';
import Subtotal from '../components/Subtotal';
import CheckoutProduct from '../components/CheckoutProduct';

// CSS
import './checkout.scss';

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <h3 className='checkout__greeting'>Hello, {user?.email}</h3>
        <h2 className='checkout__title'>Your Shopping Basket</h2>
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
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
