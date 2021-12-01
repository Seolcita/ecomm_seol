/** @format */

import React from 'react';
import { useStateValue } from '../StateProvider';

// CSS
import './checkoutProduct.scss';

function CheckoutProduct(props) {
  const { id, title, price, rating, image, hideButton } = props;
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };

  return (
    <div className='checkoutProduct' key={id}>
      <img className='checkoutProduct__img' src={image} />
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>{price}</p>
        <div className='checkoutProduct__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️ </p>
            ))}
        </div>
        {!hideButton && (
          <button className='checkoutProduct__btn' onClick={removeFromBasket}>
            Remove the item
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
