import "./RecipeEdit.css";
import { FaTimes } from "react-icons/fa";

function RecipeEdit() {
  return (
    <div className="RecipeEdit">
      <button className="btn danger">
        <FaTimes />
        <form className="Form"></form>
      </button>
    </div>
  );
}

export default RecipeEdit;
