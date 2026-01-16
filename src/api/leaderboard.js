const API_BASE = "https://snake-game-leaderboard-db.onrender.com";

export async function getTopScores() {
  const res = await fetch(`${API_BASE}/leaderboard/top`);
  if (!res.ok) throw new Error("Failed to fetch leaderboard");
  return res.json();
}

export async function submitScore(name, score) {
  const res = await fetch(`${API_BASE}/leaderboard`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, score }),
  });
  if (!res.ok) throw new Error("Failed to submit score");
  return res.json();
}
