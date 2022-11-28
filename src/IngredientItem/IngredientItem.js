import "./IngredientItem.css";

function IngredientItem({ ingItem }) {
  return (
    <div>
      <span>{ingItem.name}</span>
      <span>{ingItem.amount}</span>
    </div>
  );
}

export default IngredientItem;
