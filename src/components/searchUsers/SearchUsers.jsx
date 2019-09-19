import React from 'react';

const SearchUsers = props => {
  return (
    <>
      <form onSubmit={props.searchUsers}>
        <label>Wpisz imię lub nazwisko osoby</label>
        <input type="text" onChange={props.inputText} />
        <button type="submit">Szukaj!</button>
      </form>
    </>
  );
};

export default SearchUsers;
