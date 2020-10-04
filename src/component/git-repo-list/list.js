import React from "react";
const List = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <ul>
      <h2 className="list-head">Available Public Repositories</h2>
      {repos.map((repo) => {
        return (
          <li key={repo.id} className="list">
            <a href={repo.html_url} className="repo-text">
              {repo.name}{" "}
            </a>
            :&nbsp;
            <span className="repo-description">{repo.description}</span>
            <span className="repo-description">{repo.email}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default List;
