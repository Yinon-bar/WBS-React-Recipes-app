import "./App.css";
import RecipeList from "./RecipeList";

function App() {
  return (
    <div className="App">
      <RecipeList recipes={recipesArray} />
    </div>
  );
}

const recipesArray = [
  {
    id: 1,
    name: "Chicken",
    servings: 3,
    cookTime: 45,
    instructions:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatem quis aliquid perferendis soluta amet asperiores sed facilis eum quia!",
  },
  {
    id: 2,
    name: "Chili con carne",
    servings: 6,
    cookTime: 180,
    instructions:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatem quis aliquid perferendis soluta amet asperiores sed facilis eum quia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio temporibus et obcaecati saepe dolores, dicta earum consectetur assumenda ab ut labore commodi sint alias dolore molestiae a explicabo expedita ipsa.",
  },
  {
    id: 3,
    name: "Roast Meat",
    servings: 4,
    cookTime: 60,
    instructions:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatem quis aliquid perferendis soluta ",
  },
  {
    id: 4,
    name: "Pasta",
    servings: 4,
    cookTime: 30,
    instructions:
      "ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatem quis aliquid perferendis soluta amet asperio",
  },
];

export default App;
