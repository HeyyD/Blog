import React, { Component } from 'react';
import './index.css';
import PostFeed from './post-feed/PostFeed';
import MainMenu from './mainmenu/MainMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="hero">
          <div className="User-profile">
            <MainMenu/>
          </div>
          <h1 className="App-title">Blog Site</h1>
        </header>
        <div className="content-wrapper">
            <PostFeed/>
        </div>
      </div>
    );
  }
}
export default App;
