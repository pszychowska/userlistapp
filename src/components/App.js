import React, { Component } from 'react';
import './App.css';
import GetUsers from './getUsers/GetUsers';
import UserList from './getUsers/UserList';
import SearchUsers from './searchUsers/SearchUsers';
import ResultsList from './searchUsers/ResultsList';

class App extends Component {
  state = {
    users: [],
    number: 100,
    gender: '',
    searchText: '',
    searchingResults: []
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

  searchUsersHandler = e => {
    e.preventDefault();
    const searchingResults = this.state.users.filter(
      result =>
        result.name.first.includes(this.state.searchText) ||
        result.name.last.includes(this.state.searchText) ||
        result.location.city.includes(this.state.searchText)
    );
    this.setState({
      searchingResults: searchingResults
    });
  };

  changeSearchTextHandler = e => {
    const searchText = e.target.value;
    this.setState({
      searchText
    });
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
      users: [],
      searchingResults: []
    });
  };

  render() {
    const { users, number, searchingResults } = this.state;
    return (
      <div className="App">
        <div className="GetUsers">
          <GetUsers
            submit={this.usersFetchHandler}
            changeGender={this.changeGenderHandler}
            changeNumber={this.changeNumberHandler}
            value={number}
            clearList={this.clearList}
          />
          {users.length > 0 ? <UserList users={users} /> : 'Brak użytkowników'}
        </div>
        <div className="SearchUsers">
          <SearchUsers
            searchUsers={this.searchUsersHandler}
            inputText={this.changeSearchTextHandler}
          />
          {searchingResults.length > 0 ? (
            <ResultsList searchingResults={searchingResults} />
          ) : (
            'Brak użytkowników'
          )}
        </div>
      </div>
    );
  }
}
export default App;
