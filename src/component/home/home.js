import React from "react";
import { Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home(params) {
  return (
    <header className="App-header">
      <Jumbotron style={{ backgroundColor: "transparent" }}>
        <h1>Hello, world!</h1>
        <p>
          This is react.js practice application, I have built some of the apps
          after learning react.js
        </p>
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
      </Jumbotron>
    </header>
  );
}
