const SnakeBlock = ({ segment, index }) => (
  <div
    key={index}
    className={index === 0 ? "cell head" : "cell body"}
    style={{ gridRowStart: segment.y + 1, gridColumnStart: segment.x + 1 }}
  />
);

const Snake = ({ snake }) => <>{/* TODO 1: Render snake segments here */}</>;

export default Snake;
