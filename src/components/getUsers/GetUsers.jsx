import React from 'react';

const GetUsers = props => {
  return (
    <>
      <form onSubmit={props.submit}>
        <label>
          Wybierz płeć
          <select onChange={props.changeGender} name="gender">
            <option value="both">Wszyscy</option>
            <option value="female">Kobiety</option>
            <option value="male">Mężczyźni</option>
          </select>
        </label>
        <label>
          Liczba osób:
          <input
            type="number"
            value={props.value}
            onChange={props.changeNumber}
          />
        </label>
        <button type="submit">Pobierz listę użytkowników</button>
        <button type="reset" onClick={props.clearList}>
          Wyczyść listę
        </button>
      </form>
    </>
  );
};

export default GetUsers;
