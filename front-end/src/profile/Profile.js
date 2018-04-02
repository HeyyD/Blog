import React, { Component } from 'react';

import './Profile.css';

import Login from './Login';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
    this.state = {
        username: '',
        loggedIn: false
    }
  }

  componentWillMount() {
      let url = window.location.href;

      fetch(url + '/login').then(result => result.json())
                .then(res => {
                    this.setState({loggedIn: res});

                    if(res === true) {
                        fetch(url + '/current_user').then(res => res.json())
                            .then(result => {
                               this.setState({username: result.username});
                            });
                    }

                });
  }

  signOut(){

      let url = window.location.href + '/logout'

      fetch(url);

      this.setState({
          loggedIn: false
      });

      window.location.reload();
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
        <Login />
      );
    }
  }
}
export default Profile;