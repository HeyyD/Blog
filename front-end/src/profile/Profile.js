import React, { Component } from 'react';

import './Profile.css';

import Login from './Login';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
    this.state = {
        username: '',
        loggedIn: false
    }
  }

  componentWillMount() {
      let url = window.location.href + '/login';

      fetch(url).then(result => result.json())
                .then(res => {
                    this.setState({loggedIn: res});
                });
  }

  signIn(user) {
      this.setState({
          username: user,
          loggedIn: true
      })
  }

  signOut(){

      let url = window.location.href + '/logout'

      fetch(url);

      this.setState({
          loggedIn: false
      });
  }
  render() {
    if(this.state.loggedIn){
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