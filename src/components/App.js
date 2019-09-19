import React, { Component } from 'react';
import './App.css';
import GetUsers from './getUsers/GetUsers';
import UserList from './userList/UserList';

class App extends Component {
  state = {
    users: [],
    number: 10,
    gender: ''
  };

  usersFetchHandler = e => {
    e.preventDefault();
    const url = `https://randomuser.me/api/?results=${this.state.number}&gender=${this.state.gender}`;
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })

      .then(response => response.json())
      .then(data => {
        const user = data.results;
        this.setState({
          users: [...user]
        });
      })
      .catch(err => console.log(err));
  };

  changeNumberHandler = e => {
    this.setState({
      number: e.target.value
    });
  };

  changeGenderHandler = e => {
    this.setState({
      gender: e.target.value
    });
  };

  clearList = () => {
    this.setState({
      users: []
    });
  };

  render() {
    const { users, number } = this.state;
    return (
      <div className="App">
        <GetUsers
          submit={this.usersFetchHandler}
          changeGender={this.changeGenderHandler}
          changeNumber={this.changeNumberHandler}
          value={number}
          clearList={this.clearList}
        />
        {users.length > 0 ? <UserList users={users} /> : 'Brak użytkowników'}
      </div>
    );
  }
}
export default App;
