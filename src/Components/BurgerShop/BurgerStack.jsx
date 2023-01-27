import Ingredient from "./Ingredient";

const BurgerStack = ({ stackList, removeFromBurger }) => {
  return (
    <ul className="burger-stack">
      {stackList.length
        ? stackList.map((ing, idx) => (
            <Ingredient
              key={idx}
              idx={idx} // <= pass it down as props!
              ingredient={ing}
              removeFromBurger={removeFromBurger}
            />
          ))
        : "No ingredients yet..."}
    </ul>
  );
};

export default BurgerStack;
