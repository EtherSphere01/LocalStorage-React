import React from "react";
import "./carts.css";

const Carts = ({ phone }) => {
  return (
    <div className="cart-image-container">
      <img src={phone.image} alt="" className="image" />
      <button>Cancel</button>
    </div>
  );
};

export default Carts;
