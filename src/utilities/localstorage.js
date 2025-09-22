/**
 * 1. to get something from local storage, you will get it as a string
 * 2. convert this to javascript object/array
 * 
 * 
 * */

const getCartFromLocalStorage = () =>{
      const storedCartString = localStorage.getItem('cart')

      if(storedCartString){
        const storeCart = JSON.parse(storedCartString);
        return storeCart;
      }
      return [];
}

const saveCartToLocalStorage = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const addItemToCartLocalStorage = id => {
    const cart = getCartFromLocalStorage();
    // cart.push(id);
    const newCart = [...cart, id];
    saveCartToLocalStorage(newCart);
}

const removeFormLocalStorage = id =>{
    const storedCart = getCartFromLocalStorage()
    const remainingCart = storedCart.filter(storedId => storedId !== id);
    saveCartToLocalStorage(remainingCart)

}

export {
    getCartFromLocalStorage as getStoreCart, 
    addItemToCartLocalStorage as addToStoreCart,
    removeFormLocalStorage as removeFromCart
};