import React from 'react';

const FoodItem = ({ image, name, price, description }) => {
  return (
    <div className="food-item-container">
      <img src={image} alt={name} className="food-item-image" />
      <div className="food-item-details">
        <div className="food-item-header">
          <h3 className="food-item-name">{name}</h3>
          <p className="food-item-price">${price}</p>
        </div>
          <p className="food-item-description">{description}</p>
          <a href="#" className="food-item-order-link">Order a Delivery</a>
      </div>
    </div>
  );
};

export default FoodItem;
