import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile';
import PostFeed from './post-feed/PostFeed'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="User-profile">
            <Profile/>
          </div>
          <h1 className="App-title">Blog Site</h1>
        </header>
        <div className="App-main-feed">
          <PostFeed/>
        </div>
      </div>
    );
  }
}
export default App;
