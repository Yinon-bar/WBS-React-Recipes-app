import React from "react";
import IngredientItem from "./IngredientItem";

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
