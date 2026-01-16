import "./App.css";

import useSnakeGame from "./hooks/useSnakeGame";

function App() {
  const {} = useSnakeGame();

  return (
    <div className="snake-app">
      <h1>🐍 8-bit Snake Game</h1>

      {/* TODO 6 : Add score */}

      {/* TODO 1 : Render the game grid */}
      {/* TODO 1 : Render the snake */}
      {/* TODO 4 : Render the food */}

      {/* TODO 5 : Conditionally render the game over overlay */}

      {/* TODO 7 : Add leaderboard */}
      <footer className="footer">Made with React • Hackathon Workshop</footer>
    </div>
  );
}

export default App;
