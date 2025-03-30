import React from "react";
import "./carts.css";

const Carts = ({ phone, handleCancel }) => {
  return (
    <div className="cart-image-container">
      <img src={phone.image} alt="" className="image" />
      <button
        onClick={() => {
          handleCancel(phone);
        }}
      >
        Cancel
      </button>
    </div>
  );
};

export default Carts;
