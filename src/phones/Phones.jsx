import React, { use, useEffect, useState } from "react";
import Phone from "../phone/phone";
import "./phones.css";
import Carts from "../cart/Carts";
import { addData, getData, removeData } from "../utilities/localStorage";

const Phones = ({ phones_data }) => {
  const [cart, setCart] = useState([]);
  const phones = use(phones_data);

  // Load data from local storage
  useEffect(() => {
    const storedCart = getData();
    const newCart = [];
    for (const phone of storedCart) {
      const matchedPhone = phones.find((p) => p.id === phone);
      newCart.push(matchedPhone);
    }
    setCart(newCart);
  }, [phones]);

  const handleCart = (phone) => {
    const newCart = [...cart, phone];
    setCart(newCart);

    // Save to local storage
    addData(phone.id);
  };

  const handleCancel = (phone) => {
    const newCart = cart.filter((item) => item.id !== phone.id);
    setCart(newCart);
    removeData(phone.id);
  };

  return (
    <div>
      <h2>Cart Items: {cart.length}</h2>

      <div className="image-container">
        {cart.map((phone) => (
          <Carts phone={phone} handleCancel={handleCancel}></Carts>
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
