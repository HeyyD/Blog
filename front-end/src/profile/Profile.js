import React, { Component } from 'react';

import './Profile.css';

import Login from './Login';

class Profile extends Component {

  loggedIn = false;

  constructor(props) {
    super(props);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
    this.state = {'username': 'username'}
  }

  signIn(user) {
    this.loggedIn = true;
    this.setState({'username': user});
  }

  signOut(){
    this.loggedIn = false;
    this.forceUpdate();
  }

  render() {
    if(this.loggedIn){
      return(
        <div className="Profile-view">
          <label>{this.state.username}</label>
          <button onClick={this.signOut}>Logout</button>
        </div>
      );
    } else {
      return(
        <Login signIn={this.signIn}/>
      );
    }
  }
}
export default Profile;