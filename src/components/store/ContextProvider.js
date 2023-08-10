import React, { useState } from "react";
import Context from "./Context";
const ContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const addItemToCartHandler = (item) => {
    console.log(cartItems);
    const index = cartItems.findIndex((i) => i.title === item.title);
    if (index === -1) {
      setCartItems((prevCartItems) => [...prevCartItems, item]);
    } else {
      const updatedItems = [...cartItems];
      updatedItems[index].quantity++;

      setCartItems(updatedItems);
    }
    setQuantity((prevQuantity) => prevQuantity + item.quantity);
  };
  const removeFromCartHandler = (item) => {
    const index = cartItems.findIndex((i) => i.title === item.title);
    if (index !== -1) {
      const updatedItems = [...cartItems];
      const removeItem = updatedItems[index];
      if (removeItem.quantity === 1) {
        updatedItems.splice(index, 1);
      } else {
        // const itemPrice = item.price / item.quantity;
        removeItem.quantity = removeItem.quantity - 1;
        // removeItem.price -= itemPrice;
        updatedItems[index] = removeItem;
      }
      setCartItems(updatedItems);
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  const ctx = {
    // items: items,
    cartItems: cartItems,
    quantity: quantity,
    addItemToCart: addItemToCartHandler,
    removeFromCart: removeFromCartHandler,
  };
  return <Context.Provider value={ctx}>{props.children}</Context.Provider>;
};

export default ContextProvider;
