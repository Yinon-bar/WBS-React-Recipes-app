import React from "react";
import Recipe from "../Recipe/Recipe";
import "./RecipeList.css";

export default function RecipeList({
  recipes,
  // handleRecipeAdd,
  // handleRecipeDelete,
}) {
  return (
    <div className="RecipeList">
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.id}
          // handleRecipeDelete={handleRecipeDelete}
          recipe={recipe}
        />
      ))}
      <button
        className="btn primary"
        // onClick={handleRecipeAdd}
        style={{ width: "50%" }}
      >
        Add Recipe
      </button>
    </div>
  );
}
