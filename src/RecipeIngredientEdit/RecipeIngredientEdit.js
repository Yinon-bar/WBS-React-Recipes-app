import { FaTimes } from "react-icons/fa";
import "./RecipeIngredientEdit.css";

function RecipeIngredientEdit() {
  return (
    <>
      <div className="Ing">
        <label>
          Name
          <input type="text" />
        </label>
        <label>
          Amount
          <input type="text" />
        </label>
        <div className="AddBtn"></div>
        <button className="btn danger">
          <FaTimes />
        </button>
      </div>
    </>
  );
}

export default RecipeIngredientEdit;
