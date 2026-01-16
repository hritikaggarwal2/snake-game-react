// Helper to get random food position not on the snake
const isOnSnake = (segment, food) => segment.x === food.x && segment.y === food.y;

export default function getRandomFood(snake, boardSize) {
  let newFood;
  while (true) {
    newFood = {
      x: Math.floor(Math.random() * boardSize),
      y: Math.floor(Math.random() * boardSize),
    };

    if (!snake.some((segment) => isOnSnake(segment, newFood))) {
      return newFood;
    }
  }
}
