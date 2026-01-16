const SnakeBlock = ({ segment, index }) => (
  <div
    key={index}
    className={index === 0 ? "cell head" : "cell body"}
    style={{ gridRowStart: segment.y + 1, gridColumnStart: segment.x + 1 }}
  />
);

const Snake = ({ snake }) => (
  <>
    {snake.map((segment, index) => (
      <SnakeBlock key={index} segment={segment} index={index} />
    ))}
  </>
);

export default Snake;
