import React, { Component } from 'react';
import axios from 'axios';

import UserCard from './UserCard';

class App extends Component {
  state = {
    userData: [],
    userFollowers: [],
  };

  componentDidMount() {
    axios
      .get('https://api.github.com/users/JusticeMatthew')
      .then((res) => this.setState({ userData: res.data }))
      .catch((err) => console.log(err));
    axios
      .get('https://api.github.com/users/JusticeMatthew/followers')
      .then((res) => this.setState({ userFollowers: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        {this.state.userData.length < 1 ? (
          <h2>Loading...</h2>
        ) : (
          <UserCard
            userData={this.state.userData}
            userFollowers={this.state.userFollowers}
          />
        )}
      </div>
    );
  }
}

export default App;
