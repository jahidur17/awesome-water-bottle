import React from 'react';
import './bottle.css'

const Bottle = ({ bottle, handleAddToCart }) => {
  console.log(bottle);
  const { img, name, price, stock, seller } = bottle;
  return (
    <div className="card bottle">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <p>${price}</p>
      <p>{stock} remaining</p>
      <p>{seller}</p>
      <button onClick={() => handleAddToCart(bottle)}>Buy Now</button>
    </div>
  );
};

export default Bottle;