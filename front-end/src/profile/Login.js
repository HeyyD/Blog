import React, { Component } from 'react';
import './Login.css'

class Login extends Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.state = {"username":"none"}
  }

  onUsernameChange(event){
    this.setState({"username": event.target.value});
  }

  login(event) {
    //console.log(this.state.username);
    event.preventDefault();

    let url = 'http://localhost:8080/users/' + this.state.username;

    let init = {
      method: 'GET',
      headers: new Headers({
        'Content-type': 'application/json'
      })
    }

    fetch(url, init).then(res => res.json())
                    .then(result => console.log(result));
  }

  render() {
    return(
      <div className="Login-form">
        Username:
        <input type="text" onChange={this.onUsernameChange}/>
        Password:
        <input type="text"/>
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}
export default Login;