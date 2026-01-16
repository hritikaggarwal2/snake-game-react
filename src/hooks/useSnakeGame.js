import { useEffect, useRef, useState } from "react";
import { submitScore } from "../api/leaderboard";
import { didCollideWithFood } from "../helpers/collisions";
import getRandomFood from "../helpers/getRandomFood";
import { isDown, isLeft, isRight, isUp } from "../helpers/input";

const BOARD_SIZE = 16;
const INITIAL_SNAKE = [
  { x: 8, y: 8 },
  { x: 7, y: 8 },
];
const INITIAL_DIRECTION = { x: 1, y: 0 };
const SPEED = 120;
const ALL_DIRECTIONS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "w", "a", "s", "d"];

export default function useSnakeGame() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);

  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const directionRef = useRef(INITIAL_DIRECTION);
  directionRef.current = direction;

  const [food, setFood] = useState(getRandomFood(snake, BOARD_SIZE));

  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);

  // Keyboard input
  useEffect(() => {
    function handleKey(e) {
      if (!started && ALL_DIRECTIONS.includes(e.key)) {
        setStarted(true);
      }

      let newDir = null;

      if (isUp(e.key) && directionRef.current.y !== 1) {
        newDir = { x: 0, y: -1 };
      } else if (isDown(e.key) && directionRef.current.y !== -1) {
        newDir = { x: 0, y: 1 };
      } else if (isLeft(e.key) && directionRef.current.x !== 1) {
        newDir = { x: -1, y: 0 };
      } else if (isRight(e.key) && directionRef.current.x !== -1) {
        newDir = { x: 1, y: 0 };
      }

      if (newDir) {
        setDirection(newDir);
        directionRef.current = newDir;
      }
    }

    // Add event listener for keydown
    window.addEventListener("keydown", handleKey);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("keydown", handleKey);
  }, [started]);

  // Game loop
  useEffect(() => {
    if (!started || gameOver) return;

    const interval = setInterval(() => {
      setSnake((prevSnake) => {
        const newHead = {
          x: prevSnake[0].x + directionRef.current.x,
          y: prevSnake[0].y + directionRef.current.y,
        };

        // TODO 5 : Handle wall collision
        // TODO 5 : Handle self collision
        let newSnake = null;

        if (didCollideWithFood(newHead, food)) {
          newSnake = [newHead, ...prevSnake];
          setFood(getRandomFood(newSnake, BOARD_SIZE));
        } else {
          newSnake = [newHead, ...prevSnake.slice(0, -1)];
        }

        // TODO 6 : Update score

        return newSnake;
      });
    }, SPEED);

    return () => clearInterval(interval);
  }, [food, gameOver, started]);

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
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood(getRandomFood(INITIAL_SNAKE, BOARD_SIZE));

    setScore(0);
    setGameOver(false);
    setStarted(false);
  }

  return {
    BOARD_SIZE,
    snake,
    food,
    score,
    gameOver,
    handleRestart,
  };
}
