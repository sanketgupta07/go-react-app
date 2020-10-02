import React, { useState } from 'react';
import './App.css';
import UserCardListMedium from './component/card/userlist_m';
import UserInput from './component/form/inputform';

function App() {
   const [users, setUsers] = useState([]);
   const addCardInList = (user)=>{
      setUsers([...users, user]);
    };

   return (
    <div className="App">
      <header className="App-header">
        Github - User Cards
        <UserInput onSubmit={addCardInList}/>
        <UserCardListMedium users={users}/>
      </header>
      </div>
  );
}

export default App;
