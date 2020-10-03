import React, { useState } from 'react';
import UserInput from '../form/inputform';
import UserCardListMedium from './userlist_m';

export default function CardApp() {
   const [users, setUsers] = useState([]);
   const addCardInList = (user)=>{
      setUsers([...users, user]);
    };

   return (
    
      <header className="App-header">
        Github - User Cards
        <UserInput onSubmit={addCardInList}/>
        <UserCardListMedium users={users}/>
      </header>
  );
}

