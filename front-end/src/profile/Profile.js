import React, { Component } from 'react';

import './Profile.css';

import Login from './Login';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {'loggedIn': false};
    this.signIn = this.signIn.bind(this);
  }

  signIn() {
    this.setState({'loggedIn':true});
  }

  render() {

    if(this.state.loggedIn){
      return <p>LOGGED IN</p>;
    } else {
      return(
        <div className="Profile-view">
          <Login signIn={this.signIn}/>
        </div>
      );
    }
  }
}
export default Profile;