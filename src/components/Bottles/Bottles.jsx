import React, { use, useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToStoreCart, getStoreCart } from "../../utilities/localstorage";

const Bottles = ({ bottlePromise }) => {
    const [cart, setCart] = useState([]);


  const bottles = use(bottlePromise);

  // useEffect
  useEffect(() =>{
     const storedCartIds = getStoreCart();
    //  console.log(storedCartIds, bottles);

     const storedCart = [];


     for(const id of storedCartIds){
        // console.log(id);
        const cartBottle = bottles.find(bottle => bottle.id === id);
        if(cartBottle){
           storedCart.push(cartBottle);
        }
     }
     console.log('stored cart', storedCart);
     setCart(storedCart);



  }, [bottles])

  const handleAddToCart = (bottle) => {
    // console.log('bottle will be added to the cart', bottle);
    const newCart = [...cart, bottle]
    setCart(newCart);
    
    // save the bottle id in the storage
    addToStoreCart(bottle.id);


  }
  // console.log(bottles);
  return (
    <div>
      <h3>Bottles: {bottles.length}</h3>
      <p>added to cart: {cart.length}</p>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle key={bottle.id}
          handleAddToCart = {handleAddToCart}
           bottle={bottle}></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
