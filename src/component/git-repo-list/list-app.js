import React, { useState } from "react";
import UserInput from "../form/inputform";
import List from "./list";
import WithListLoading from "./withListLoading";
function GitListApp() {
  const ListLoading = WithListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
    user: null,
  });

  const getRepos = async (login) => {
    setAppState({ loading: true });
    const resp = await fetch(`https://api.github.com/users/${login}/repos`);
    const data = await resp.json();
    setAppState({
      loading: false,
      repos: data,
      user: login,
    });
  };

  return (
    <div className="App-header">
      {appState.user == null ? "" : `${appState.user}'s`} Repo deatils
      <br />
      <UserInput onSubmit={getRepos} text="Get Repos" />
      <div className="repo-container">
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
    </div>
  );
}
export default GitListApp;
