import React, { useContext } from "react";
import FunctionsContext from "../Context/FunctionsContext";
import Recipe from "../Recipe/Recipe";
import "./RecipeList.css";

export default function RecipeList({ recipes }) {
  const { handleRecipeAdd } = useContext(FunctionsContext);
  return (
    <div className="RecipeList">
      <div className="Headings">
        <h1>Welcome to Recipes</h1>
      </div>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
      <button
        className="btn primary"
        onClick={handleRecipeAdd}
        style={{ width: "50%" }}
      >
        Add Recipe
      </button>
    </div>
  );
}
