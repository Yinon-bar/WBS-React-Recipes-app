import React from "react";
import Recipe from "../Recipe/Recipe";
import "./RecipeList.css";

export default function RecipeList({ recipes }) {
  return (
    <div className="RecipeList">
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
      <button>Add Recipe</button>
    </div>
  );
}
