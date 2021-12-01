/** @format */

import React from "react";
import { useStateValue } from "../StateProvider";

// CSS
import "./product.scss";
import { Cookie } from "@mui/icons-material";

function Product(props) {
  const { id, title, price, image, rating } = props;
  const [{ basket }, dispatch] = useStateValue();
  // console.log('BASKET: ', basket);

  const addToBasket = () => {
    // Dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__img">
        <img src={image} />
      </div>
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <strong>${price}</strong>
        </p>
        <div className="product__rating">
          {/* {console.log(rating)} */}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
      </div>
      <button className="product__btn" onClick={addToBasket}>
        <Cookie className="product__icon" />
        Add to cart
      </button>
    </div>
  );
}

export default Product;
