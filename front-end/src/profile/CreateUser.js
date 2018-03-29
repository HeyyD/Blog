import React, { Component } from 'react';
import './CreateUser.css';

class CreateUser extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.createUser = this.createUser.bind(this);

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

  createUser() {
    if(this.state.password === this.state.confirm) {

      let url = window.location.href;
      let data = {
        username: this.state.username,
        password: this.state.password
      };

      fetch(url, {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      }).catch(console.log('error'));
    }
  }

  render() {
    return(
      <form className="Create-account">
        <input name="username" type="text" placeholder="Username" onChange={this.handleChange}/>
        <input name="password" type="password" placeholder="Password" onChange={this.handleChange}/>
        <input name="confirm" type="password" placeholder="Confirm password" onChange={this.handleChange}/>
        <input type="button" value="Create an account!" onClick={this.createUser} />
      </form>
    );
  }
}
export default CreateUser;