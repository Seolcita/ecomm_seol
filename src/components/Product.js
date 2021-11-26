/** @format */

import React from "react";

// CSS
import "./product.scss";

// Images
import Soap from "../images/soap.png";

function Product(props) {
  const { title, price, image, rating } = props;
  return (
    <div className='product'>
      <div className='product__info'>
        <p className='product__title'>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {console.log(rating)}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
      </div>
      <div className='product__img'>
        <img src={image} />
      </div>
      <button className='product__btn'>Add to cart</button>
    </div>
  );
}

export default Product;
