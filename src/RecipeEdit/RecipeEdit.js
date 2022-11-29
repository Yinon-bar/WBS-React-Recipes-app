import "./RecipeEdit.css";
import { FaTimes } from "react-icons/fa";
import RecipeIngredientEdit from "../RecipeIngredientEdit/RecipeIngredientEdit";

function RecipeEdit({ recipe }) {
  return (
    <div className="RecipeEdit">
      <div className="Headings">
        <h1>Edit Recipe</h1>
        <button className="btn danger">
          <FaTimes />
        </button>
      </div>
      <div className="Form">
        <form>
          <label>
            Name
            <input type="text" value={recipe.name} required />
          </label>
          <label>
            Cooking Time
            <input type="number" value={recipe.cookTime} required />
          </label>
          <label>
            Servings
            <input type="number" min="1" value={recipe.servings} required />
          </label>
          <label>
            Instructions
            <textarea
              cols="30"
              rows="5"
              value={recipe.instructions}
              required
            ></textarea>
          </label>
          <label>Ingredients</label>
          {recipe.ingredients.map((ing) => (
            <RecipeIngredientEdit key={ing.id} ing={ing} />
          ))}

          <div className="Btns">
            <button className="btn primary">Add Ingredient</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RecipeEdit;
