import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Instagram from './components/containers/Instagram'
import PostsContainer from './components/containers/PostsContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Instagram />
        </header>
        <PostsContainer />

      </div>
    );
  }
}



export default App;

// <img src={logo} className="App-logo" alt="logo" />
