import React from "react";
import { Card } from "react-bootstrap";

function UserCardMedium(props) {
  return (
    <Card bg="dark" text="white" style={{ width: "15rem" }}>
      <Card.Header>{props.login}</Card.Header>
      <Card.Img variant="top" src={props.avatar_url} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.bio}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default UserCardMedium;
