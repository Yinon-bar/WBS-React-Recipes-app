import React from "react";
import IngredientItem from "../IngredientItem/IngredientItem";
import "./Ingredients.css";

function Ingredients({ ingredients }) {
  return (
    <div>
      {ingredients.map((ingItem) => (
        <IngredientItem key={Math.random()} ingItem={ingItem} />
      ))}
    </div>
  );
}

export default Ingredients;
