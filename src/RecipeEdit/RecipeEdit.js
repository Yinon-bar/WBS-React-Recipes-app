import "./RecipeEdit.css";
import { FaTimes } from "react-icons/fa";

function RecipeEdit() {
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
            <input type="text" required />
          </label>
          <label>
            Cooking Time
            <input type="number" required />
          </label>
          <label>
            Servings
            <input type="number" min="1" required />
          </label>
          <label>
            Instructions
            <textarea cols="30" rows="5" required></textarea>
          </label>
          <label>Ingredients</label>
          <div className="Ing">
            <label>
              Name
              <input type="text" />
            </label>
            <label>
              Amount
              <input type="text" />
            </label>
            <div className="AddBtn">
              <button className="btn danger">
                <FaTimes />
              </button>
            </div>
          </div>
          <div className="Btns">
            <button className="btn primary">Add Ingredient</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RecipeEdit;
