import React, { Component } from 'react';
import './Login.css'

class Login extends Component {
  render() {
    return(
      <form className="Login-form">
        Username:
        <input type="text"/>
        Password:
        <input type="text"/>
        <button>Login</button>
      </form>
    );
  }
}
export default Login;