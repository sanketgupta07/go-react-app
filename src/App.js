import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/git-repo-list/list';
import withListLoading from './components/git-repo-list/withListLoading';
import ShoppingList from './components/tut1/shoppingList';

function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });
  

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://api.github.com/users/sanketgupta07/repos`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);
  return (
    <div className='App'>
      <div className='container'>
        <h1>Repo deatils</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      <footer>
        <div className='footer'>
          Built{' '}
          <span role='img' aria-label='love'>
            💚
          </span>{' '}
          with by Sanket
          <ShoppingList name="Sanket" />
        </div>
      </footer>
    </div>
  );
}
export default App;
