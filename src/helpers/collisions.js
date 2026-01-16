export const didCollideWithWall = (head, boardSize) => {
  return head.x < 0 || head.x >= boardSize || head.y < 0 || head.y >= boardSize;
};

export const didCollideWithSelf = (oldSnake, head) => {
  return oldSnake.some((seg) => seg.x === head.x && seg.y === head.y);
};

export const didCollideWithFood = (head, food) => {
  return head.x === food.x && head.y === food.y;
};
