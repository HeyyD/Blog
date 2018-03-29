import React, { Component } from 'react';

class CreateUser extends Component {
  render() {
    return(
      <form className="Create-account">
        <input type="text" placeholder="Username"/>
        <input type="password" placeholder="Password"/>
        <input type="password" placeholder="Confirm password"/>
        <button>Create an account!</button>
      </form>
    );
  }
}
export default CreateUser;