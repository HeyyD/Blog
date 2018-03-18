import React, { Component } from 'react';

import './Profile.css';

import Login from './Login';

class Profile extends Component {
  render() {
    return(
      <div className="Profile-view">
        <Login/>
      </div>
    );
  }
}
export default Profile;