import React from 'react';

const ResultsList = props => {
  let results = props.searchingResults.map(user => (
    <div key={user.login.uuid}>
      <img src={user.picture.large} alt={user.name.last} />
      <h4>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h4>
      <p>{user.email}</p>
      <p>{user.location.city}</p>
    </div>
  ));

  return (
    <div>
      <p>Znalezionych osób: {results.length}</p>

      {results}
    </div>
  );
};

export default ResultsList;
