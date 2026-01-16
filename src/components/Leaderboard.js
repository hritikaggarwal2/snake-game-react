// src/components/Leaderboard.js
import { useEffect, useState } from "react";
import { getTopScores } from "../api/leaderboard";

export default function Leaderboard() {
  const [scores, setScores] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchScores() {
      try {
        const data = await getTopScores();
        setScores(data);
      } catch (err) {
        console.error(err);
        setError("Could not load leaderboard");
      }
    }

    const interval = setInterval(fetchScores, 2000); // Refresh every 2 seconds
    fetchScores();

    return () => clearInterval(interval);
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((entry, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{entry.name}</td>
              <td>{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
