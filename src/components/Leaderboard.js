// src/components/Leaderboard.js
import { useEffect, useState } from "react";
import { getTopScores } from "../api/leaderboard";

export default function Leaderboard() {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchScores() {
      try {
        setLoading(true);
        const data = await getTopScores();
        setScores(data);
      } catch (err) {
        setError("Could not load leaderboard");
      } finally {
        setLoading(false);
      }
    }

    const interval = setInterval(fetchScores, 2000); // Refresh every 2 seconds
    fetchScores();

    return () => clearInterval(interval);
  }, []);

  if (loading) return <div>Loading leaderboard...</div>;
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
