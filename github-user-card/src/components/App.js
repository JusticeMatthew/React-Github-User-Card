import React, { Component } from 'react';
import axios from 'axios';
import Particles from 'react-particles-js';

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

  clickHandler = () => {
    this.setState({
      expanded: !this.expanded,
    });
  };

  render() {
    return (
      <div className='wrapper'>
        <div className='cardContainer'>
          {this.state.userData.length < 1 ? (
            <h2>Loading...</h2>
          ) : (
            <UserCard
              userData={this.state.userData}
              userFollowers={this.state.userFollowers}
              expanded={this.state.expanded}
              clickHandler={this.clickHandler}
            />
          )}
        </div>
        <Particles
          id='particles-js'
          params={{
            particles: {
              number: {
                value: 150,
              },
              size: {
                value: 3,
              },
              move: {
                speed: 4,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse',
                },
              },
            },
          }}
        />
      </div>
    );
  }
}

export default App;
