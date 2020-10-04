import React, { useState } from "react";
import { CardColumns } from "react-bootstrap";
import UserInput from "../form/inputform";
import UserCardListMedium from "./userlist_m";

export default function CardApp() {
  const [users, setUsers] = useState([]);
  const addCardInList = async (login) => {
    const resp = await fetch(`https://api.github.com/users/${login}`);
    const data = await resp.json();
    setUsers([...users, data]);
  };

  return (
    <header className="App-header">
      Github - User Cards
      <UserInput onSubmit={addCardInList} text="Add Card" />
      <CardColumns>
        <UserCardListMedium users={users} />
      </CardColumns>
    </header>
  );
}
