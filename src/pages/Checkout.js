/** @format */

import React from 'react';
import { useStateValue } from '../StateProvider';
import Subtotal from '../components/Subtotal';
import CheckoutProduct from '../components/CheckoutProduct';

// CSS
import './checkout.scss';

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <h2 className='checkout__title'>Your Shopping Basket</h2>
        {basket.map(item => {
          console.log('ITEM', item);
          const { id, title, image, rating, price } = item;

          return (
            <CheckoutProduct
              id={id}
              title={title}
              image={image}
              rating={rating}
              price={price}
              // id={item.id}
              // title={item.title}
              // image={item.image}
              // rating={item.rating}
              // price={item.price}
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
