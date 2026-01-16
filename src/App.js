import "./App.css";
import GameBoard from "./components/GameBoard";
import Snake from "./components/Snake";

import useSnakeGame from "./hooks/useSnakeGame";

function App() {
  const { BOARD_SIZE, snake } = useSnakeGame();

  return (
    <div className="snake-app">
      <h1>🐍 8-bit Snake Game</h1>

      {/* TODO 6 : Add score */}

      <GameBoard boardSize={BOARD_SIZE}>
        <Snake snake={snake} />
        {/* TODO 4 : Render the food */}
      </GameBoard>

      {/* TODO 5 : Conditionally render the game over overlay */}

      {/* TODO 7 : Add leaderboard */}
      <footer className="footer">Made with React • Hackathon Workshop</footer>
    </div>
  );
}

export default App;
