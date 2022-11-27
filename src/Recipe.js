export default function Recipe({ recipe }) {
  return (
    <div>
      <h1>{recipe.name}</h1>
      <div className="btns">
        <button>Edit</button>
        <button>Delete</button>
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
    </div>
  );
}
