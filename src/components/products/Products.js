import React from "react";
import Button from "../UI/Button/Button";
const Products = () => {
  return (
    <React.Fragment>
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="box">
              <div>Colors</div>
              <img
                src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
                alt="colors"
              />
              <div>100</div>
              <Button>Add to Cart</Button>
            </div>
            <div class="box">
              <div>Black and white Colors</div>
              <img
                src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
                alt="colors"
              />
              <div>50</div>
              <Button>Add to Cart</Button>
            </div>
          </div>
          <div class="col">
            <div>Yellow & Black Colors</div>
            <img
              src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
              alt="colors"
            />
            <div>70</div>
            <Button>Add to Cart</Button>
            <div>Blue Color</div>
            <img
              src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
              alt="colors"
            />
            <div>100</div>
            <Button>Add to Cart</Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Products;
