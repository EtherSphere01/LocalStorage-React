import React, { use, useState } from "react";
import Phone from "../phone/phone";
import "./phones.css";
import Carts from "../cart/Carts";

const Phones = ({ phones_data }) => {
  const [cart, setCart] = useState([]);
  const handleCart = (phone) => {
    const newCart = [...cart, phone];
    setCart(newCart);
  };

  const phones = use(phones_data);
  return (
    <div>
      <h2>Cart Items: {cart.length}</h2>

      <div className="image-container">
        {cart.map((phone) => (
          <Carts key={phone.id} phone={phone}></Carts>
        ))}
      </div>

      <div className="phones">
        {phones.map((phone) => (
          <Phone key={phone.id} phone={phone} handleCart={handleCart}></Phone>
        ))}
      </div>
    </div>
  );
};

export default Phones;
