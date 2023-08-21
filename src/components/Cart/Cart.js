import React, { useContext } from "react";
import Modal from "../UI/Modal";
import "./Cart.css";
import Context from "../ContextStore/Context";
const Cart = (props) => {
  const cartCtx = useContext(Context);
  let totalPrice = 0;
  for (const item of cartCtx.cartItems) {
    totalPrice += item.price * Number(item.quantity);
  }
  totalPrice = totalPrice.toFixed(2);
  const removeHamdler =(item)=>{
    cartCtx.removeFromCart(item)
  }
  const cart = cartCtx.cartItems.map((item) => {
    return (
      <div className="items">
        <div className="item">
          <div className="titleAndImage">
            <img src={item.imageURL} alt="colors" className="itemImage" />
            <div className="itemTitle">{item.title}</div>
          </div>
          <div className="itemQuantity">{item.quantity}</div>
          <div className="priceAndButton">
            <div className="itemPrice">{item.price}</div>
            <button className="removeButton" onClick={()=>{removeHamdler(item)}}>-</button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <Modal>
      <button onClick={props.onClose}>x</button>
      <div className="cartHeadings">
        <div className="cartItemDiv">Items</div>
        <div className="cartQuantityDiv">Quantity</div>
        <div className="cartPriceDiv">Price</div>
      </div>
      {cart}
      <div className="cartHeadings">
        Total Price <span>{totalPrice}</span>
      </div>
      <button>Order</button>
    </Modal>
  );
};
export default Cart;
