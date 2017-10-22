import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import GamesPage from './GamesPage';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to='games'>games</Link>

        <Route path='/games' component={GamesPage} />
      </div>
    );
  }
}

export default App;
