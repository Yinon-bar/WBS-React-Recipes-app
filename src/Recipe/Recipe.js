import { useContext } from "react";
import FunctionsContext from "../Context/FunctionsContext";
import Ingredients from "../Ingredients/Ingredients";
import "./Recipe.css";

export default function Recipe({ recipe }) {
  const { handleRecipeDelete } = useContext(FunctionsContext);
  console.log(handleRecipeDelete);

  return (
    <div className="Recipe">
      <div className="Card-Header Dotted">
        <h1>{recipe.name}</h1>
        <div className="btns">
          <button className="btn warning">Edit</button>
          <button
            onClick={() => handleRecipeDelete(recipe.id)}
            className="btn danger"
          >
            Delete
          </button>
        </div>
      </div>
      <div>
        <span className="bold">Cook Time: </span>
        <span>{recipe.cookTime} min.</span>
      </div>
      <div>
        <span className="bold">Servings: </span>
        <span>{recipe.servings}</span>
      </div>
      <div>
        <span className="bold">Instructions: </span>
        <div className="Instructions">{recipe.instructions}</div>
      </div>
      <div>
        <span className="bold">Igredients: </span>
        <div>{<Ingredients ingredients={recipe.ingredients} />}</div>
      </div>
    </div>
  );
}
