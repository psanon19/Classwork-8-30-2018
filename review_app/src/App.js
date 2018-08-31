import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ScoreButton from './ScoreButton'
import Kindle from './Kindle'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Review Classwork</h1>
        </header>

          <ScoreButton/>
          <Kindle/>

      </div>
    );
  }
}

export default App;
