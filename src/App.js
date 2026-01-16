import "./App.css";
import Food from "./components/Food";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import Leaderboard from "./components/Leaderboard";
import Score from "./components/Score";
import Snake from "./components/Snake";

import useSnakeGame from "./hooks/useSnakeGame";

function App() {
  const { BOARD_SIZE, snake, food, score, handleRestart, gameOver } = useSnakeGame();

  return (
    <div className="snake-app">
      <h1>🐍 8-bit Snake Game</h1>
      <Score score={score} />

      <GameBoard boardSize={BOARD_SIZE}>
        <Snake snake={snake} />
        <Food food={food} />
      </GameBoard>

      {gameOver && <GameOver score={score} handleRestart={handleRestart} />}

      <Leaderboard />

      <footer className="footer">Made with React • Hackathon Workshop</footer>
    </div>
  );
}

export default App;
