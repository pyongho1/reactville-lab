import { useState } from "react";
import Ingredient from "./Ingredient";

const IngredientList = ({ ingredients, addToBurger }) => {
  const [hasBuns, setHasBuns] = useState(Boolean);

  return (
    <>
      <ul>
        {ingredients.map((ingredient, idx) => (
          <Ingredient
            key={idx}
            isList={true}
            ingredient={ingredient}
            addToBurger={addToBurger}
          />
        ))}
      </ul>
    </>
  );
};

export default IngredientList;
