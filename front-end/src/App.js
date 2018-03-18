import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Blog Site</h1>
        </header>
        <div className="App-left-panel">
          <Profile/>
        </div>
      </div>
    );
  }
}
export default App;
