import React, { Component } from 'react';

class Login extends Component {
  render() {
    return(
      <form>
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