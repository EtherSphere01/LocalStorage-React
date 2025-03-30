import React, { use } from "react";
import Phone from "../phone/phone";
import "./phones.css";

const Phones = ({ phones_data }) => {
  const phones = use(phones_data);
  return (
    <div>
      <h2>Cart Items: 0</h2>

      <div className="phones">
        {phones.map((phone) => (
          <Phone key={phone.id} phone={phone}></Phone>
        ))}
      </div>
    </div>
  );
};

export default Phones;
