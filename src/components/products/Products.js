import React, { useContext } from "react";
import { NavLink } from "react";
import Context from "../ContextStore/Context";
import "./Products.css";
const Products = () => {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageURL:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageURL:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageURL:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageURL:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  const cartCtx = useContext(Context);
  const addToCartHandler = (item) => {
    const updatedItem = { ...item, quantity: 1 };
    cartCtx.addItemToCart(updatedItem);
  };
  const products = productsArr.map((item) => {
    return (
      <div key={item.title} className="products">
        <div className="product">
          <div className="productTitle">{item.title}</div>
          <NavLink to={`/store/${JSON.stringify(item.id)}`}>
            <img
              src={item.imageURL}
              alt={item.title}
              className="productImage"
            />
          </NavLink>
          <div className="priceAndCart">
            <div className="procudtPrice">{item.price}</div>
            <button
              className="productButton"
              onClick={() => addToCartHandler(item)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    );
  });
  return <div>{products}</div>;
};

export default Products;
