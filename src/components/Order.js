/** @format */

import React from 'react';
import moment from 'moment';
import CurrencyFormat from 'react-currency-format';

// Components
import CheckoutProduct from './CheckoutProduct';

// CSS
import './order.scss';

function Order(props) {
  //console.log('PROPS', props.order);
  const { id, data } = props.order;

  return (
    <div className='order'>
      <div className='order__header'>
        <h1 className='order__title'>Oder Detail</h1>
        <p className='order__id'>
          <strong>Order# </strong>
          {id}
        </p>
      </div>

      <div className='order__detail'>
        <p className='order__date'>
          <strong>Date: </strong>
          {moment.unix(data.created).format('MMMM Do YYYY, h:mma')}
        </p>

        <CurrencyFormat
          renderText={value => (
            <p className='order__total'>
              <strong>Total: </strong>
              {value}
            </p>
          )}
          decimalScale={2}
          value={data.amount / 100}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'}
        />
      </div>
      {data.basket?.map(item => {
        const { title, image, rating, price } = item;
        return (
          <CheckoutProduct
            id={id}
            title={title}
            image={image}
            rating={rating}
            price={price}
            hideButton
          />
        );
      })}
    </div>
  );
}

export default Order;
