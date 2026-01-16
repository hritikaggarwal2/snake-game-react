const Food = ({ food }) => (
  <div className="cell food" style={{ gridRowStart: food.y + 1, gridColumnStart: food.x + 1 }} />
);

export default Food;
