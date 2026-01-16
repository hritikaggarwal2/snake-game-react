const GameOver = ({ score, handleRestart }) => {
  return (
    <div className="overlay">
      <div className="gameover">Game Over!</div>
      <div className="gameover-reason">You scored {score} points!</div>
      <button className="restart-btn" onClick={handleRestart}>
        Restart
      </button>
    </div>
  );
};

export default GameOver;
