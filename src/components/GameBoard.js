const GameBoard = ({ boardSize, children }) => {
  return (
    <div
      className="board"
      style={{
        gridTemplateRows: `repeat(${boardSize}, 1fr)`,
        gridTemplateColumns: `repeat(${boardSize}, 1fr)`,
      }}
    >
      {children}
    </div>
  );
};

export default GameBoard;
