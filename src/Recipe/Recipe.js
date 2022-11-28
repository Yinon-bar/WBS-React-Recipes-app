import Ingredients from "../Ingredients/Ingredients";
import "./Recipe.css";

export default function Recipe({ recipe }) {
  return (
    <div className="Recipe">
      <div className="Card-Header">
        <h1>{recipe.name}</h1>
        <div className="btns">
          <button className="btn warning">Edit</button>
          <button className="btn danger">Delete</button>
        </div>
      </div>
      <div>
        <span>Cook Time: </span>
        <span>{recipe.cookTime} </span>
      </div>
      <div>
        <span>Servings: </span>
        <span>{recipe.servings}</span>
      </div>
      <div>
        <span>Instructions: </span>
        <div>{recipe.instructions}</div>
      </div>
      <div>
        <span>Igredients: </span>
        <div>{<Ingredients ingredients={recipe.ingredients} />}</div>
      </div>
    </div>
  );
}
