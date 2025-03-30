import React from "react";
import "./phone.css";

const Phone = ({ phone }) => {
  const { name, model, release_date, image } = phone;
  return (
    <div className="phone">
      <img src={image} alt="" className="image" />
      <h3>Phone Name: {name} </h3>
      <p>Model: {model} </p>
      <p>Release Date: {release_date} </p>
      <button> Buy now</button>
    </div>
  );
};

export default Phone;
