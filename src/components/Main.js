import React from "react";
import FoodItem from "./FoodItem";
import greekSaladImage from "../assets/greek salad.jpg"; // Ensure the correct path for your image
import bruschettaImage from "../assets/bruchetta.svg"; // Ensure the correct path for your image
import lemonDessertImage from "../assets/lemon dessert.jpg"; // Ensure the correct path for your image 
const Main = () => {
  return (
    <main>
      <div className="food-item-list">
        <FoodItem
          image={greekSaladImage}
          name="Greek Salad"
          price="12.99"
          description="The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
        />
        <FoodItem
          image={bruschettaImage}
          name="Bruschetta"
          price="5.99"
          description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        />
        <FoodItem
          image={lemonDessertImage}
          name="Lemon Dessert"
          price="5.00"
          description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        />
      </div>
    </main>
  );
};

export default Main;
