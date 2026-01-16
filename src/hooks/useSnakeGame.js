import { useEffect, useState } from "react";
import { submitScore } from "../api/leaderboard";

const BOARD_SIZE = 16;
const INITIAL_SNAKE = [
  { x: 8, y: 8 },
  { x: 7, y: 8 },
  { x: 6, y: 8 },
];
const INITIAL_DIRECTION = { x: 1, y: 0 };
const SPEED = 120;
const ALL_DIRECTIONS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "w", "a", "s", "d"];

export default function useSnakeGame() {
  // TODO 2 : Add snake state

  // TODO 3 : Add direction state and ref

  // TODO 4 : Add food state

  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);

  // Keyboard input
  useEffect(() => {
    function handleKey(e) {
      if (!started && ALL_DIRECTIONS.includes(e.key)) {
        setStarted(true);
      }

      // TODO 3 : Handle user input
      // TODO 3 : Update direction state
    }

    // Add event listener for keydown
    window.addEventListener("keydown", handleKey);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("keydown", handleKey);
  }, [started]);

  // Game loop
  useEffect(() => {
    if (!started || gameOver) return;

    // TODO 2 : Create a new interval to move the snake
    // TODO 2 : Update snake state to move
    // Move snake by adding new head based on direction
    // TODO 5 : Handle wall collision
    // TODO 5 : Handle self collision
    // TODO 4 : Handle food eating
    // TODO 6 : Update score
  }, [gameOver, started]);

  // Submit score when game over
  useEffect(() => {
    if (gameOver && score > 0) {
      // Prompt for name (replace with your own UI if needed)
      const name = window.prompt("Game Over! Enter your name for the leaderboard:");
      if (name) {
        submitScore(name, score);
      }
    }
  }, [gameOver, score]);

  // Reset the state when we play again
  function handleRestart() {
    // TODO 2 : Reset the snake state
    // TODO 3 : Reset the direction state
    // TODO 4 : Reset the food state

    setScore(0);
    setGameOver(false);
    setStarted(false);
  }

  return {
    BOARD_SIZE,
    snake: INITIAL_SNAKE,
    // TODO 4 : Add food state
    // food,
    score,
    gameOver,
    handleRestart,
  };
}
