import React, { Component } from 'react';
import './CreateUser.css';

class CreateUser extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      username: '',
      password: '',
      confirm: ''
    }

  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return(
      <form className="Create-account">
        <input name="username" type="text" placeholder="Username" onChange={this.handleChange}/>
        <input name="password" type="password" placeholder="Password" onChange={this.handleChange}/>
        <input name="confirm" type="password" placeholder="Confirm password" onChange={this.handleChange}/>
        <input type="button" value="Create an account!" />
      </form>
    );
  }
}
export default CreateUser;