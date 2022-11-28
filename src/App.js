import { useState } from "react";
import "./App.css";
import RecipeList from "./RecipeList/RecipeList";

function App() {
  const [recipes, setRecipes] = useState(recipesArray);

  function handleRecipeAdd() {
    const newRecipe = {
      id: Math.random(),
      name: "New",
      servings: 3,
      cookTime: 45,
      instructions:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor quisquam suscipit quo labore corrupti odit.",
      ingredients: [
        {
          id: 1,
          name: "Chicken",
          amount: 1,
        },
      ],
    };
    setRecipes([...newRecipe, newRecipe]);
  }

  return (
    <div className="App">
      <RecipeList recipes={recipes} handleRecipeAdd={handleRecipeAdd} />
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
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: 1,
      },
    ],
  },
  {
    id: 2,
    name: "Chili con carne",
    servings: 6,
    cookTime: 180,
    instructions:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatem quis aliquid perferendis soluta amet asperiores sed facilis eum quia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio temporibus et obcaecati saepe dolores, dicta earum consectetur assumenda ab ut labore commodi sint alias dolore molestiae a explicabo expedita ipsa.",
    ingredients: [
      {
        id: 1,
        name: "Chili",
        amount: "2 Tbs",
      },
      {
        id: 2,
        name: "Salt",
        amount: "2 Tbs",
      },
    ],
  },
  {
    id: 3,
    name: "Roast Meat",
    servings: 4,
    cookTime: 60,
    instructions:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatem quis aliquid perferendis soluta ",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: 1,
      },
    ],
  },
  {
    id: 4,
    name: "Pasta",
    servings: 4,
    cookTime: 30,
    instructions:
      "ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatem quis aliquid perferendis soluta amet asperio",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: 1,
      },
    ],
  },
];

export default App;
