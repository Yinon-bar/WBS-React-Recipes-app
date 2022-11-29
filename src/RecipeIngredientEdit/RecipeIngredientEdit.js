import { FaTimes } from "react-icons/fa";
import "./RecipeIngredientEdit.css";

function RecipeIngredientEdit({ ing }) {
  return (
    <>
      <div className="Ing">
        <label>
          Name
          <input type="text" value={ing.name} />
        </label>
        <label>
          Amount
          <input type="text" value={ing.amount} />
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
