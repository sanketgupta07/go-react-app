import React, { useState } from "react";
import Game from "./game";
import "./game.css";

export default function StarGame() {
  const [gameId, setGameId] = useState(1);
  return (
    <header className="App-header">
      <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />
    </header>
  );
}
