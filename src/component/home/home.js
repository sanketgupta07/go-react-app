import React from "react";
import { Link } from "react-router-dom";

export default function Home(params) {
  return (
    <header className="App-header">
      <p>
        React apps for my learning
        <br />
        <ul>
          <li>
            <Link to="counterBtn">Counter</Link>
          </li>
          <li>
            <Link to="card-app">Card-App</Link>
          </li>
          <li>
            <Link to="stars-game">Stars Game</Link>
          </li>
          <li>
            <Link to="git-repo-list">My Git Repos</Link>
          </li>
        </ul>
      </p>
    </header>
  );
}
