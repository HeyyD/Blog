import React, { Component } from 'react';
import './CreateUser.css';

class CreateUser extends Component {
  render() {
    return(
      <form className="Create-account">
        <input type="text" placeholder="Username"/>
        <input type="password" placeholder="Password"/>
        <input type="password" placeholder="Confirm password"/>
        <input type="button" value="Create an account!" />
      </form>
    );
  }
}
export default CreateUser;