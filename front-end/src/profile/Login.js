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
    this.setState({[event.target.name]: event.target.value});
  }

  login(event) {
    event.preventDefault();

    let url = 'http://localhost:8080/login/';
    let data = {username : this.state.username, password : this.state.password}

    let init = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-type': 'application/json'
      })
    }

    fetch(url, init).then(res => res.json())
                    .then(result => {
                      if(result === true)
                        this.props.signIn(this.state.username);
                    });
  }

  render() {
    return(
      <div className="Login-form">
        <input name="username" placeholder="Username" type="text" onChange={this.onUsernameChange}/>
        <input name="password" placeholder="Password" type="password" onChange={this.onUsernameChange}/>
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}
export default Login;