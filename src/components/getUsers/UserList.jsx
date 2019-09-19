import React from 'react';

const UserList = props => {
  const users = props.users.map(user => (
    <li key={user.login.uuid}>
      {`Imię: ${user.name.first}, Nazwisko: ${user.name.last}, Miasto: ${user.location.city}`}
    </li>
  ));

  return <ul>{users}</ul>;
};

export default UserList;
