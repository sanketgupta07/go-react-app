import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AppNav() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand to="home">React-Learn</Navbar.Brand>
        <Nav className="mr-auto">
          <Link className="nav-link" to="home">
            Home
          </Link>
          <Link className="nav-link" to="counterBtn">
            Counter
          </Link>
          <Link className="nav-link" to="card-app">
            Card-App
          </Link>
          <Link className="nav-link" to="stars-game">
            Stars Game
          </Link>
          <Link className="nav-link" to="git-repo-list">
            My Git Repos
          </Link>
          <Link className="nav-link" to="about">
            AboutUs
          </Link>
        </Nav>
        {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
            </Form> */}
      </Navbar>
    </>
  );
}
