import React, { useContext } from "react";
import Modal from "../UI/Modal";
import "./Cart.css";
const Cart = (props) => {
  const cartElements = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];
  const cart = cartElements.map((item) => {
    return (
        <div className="items">
        <div className="item">
          <div className="titleAndImage">
            {/* <img src={item.imageUrl} alt="colors" className="itemImage" /> */}
            <div className="itemTitle">{item.title}</div>
          </div>
          <div className="itemQuantity">{item.quantity}</div>
          <div className="priceAndButton">
            <div className="itemPrice">{item.price}</div>
            <button className="removeButton">-</button>
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
      <div className="cartHeadings">Total Price <span>450</span></div>
      <button>Order</button>
    </Modal>
  );
};
export default Cart;
