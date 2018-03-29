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
      confirm: '',
      errorMessage: ''
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
      }).then((response) => {
        if(!response.ok) {
          this.setState({errorMessage: 'Username is already in use'})
          throw response;
        }
        this.props.history.push("/");
      });
      
    } else {
      this.setState({errorMessage: 'Passwords do not match'})
    }
  }

  render() {
    return(
      <form className="Create-account">
        <h5>{this.state.errorMessage}</h5>
        <input name="username" type="text" placeholder="Username" onChange={this.handleChange}/>
        <input name="password" type="password" placeholder="Password" onChange={this.handleChange}/>
        <input name="confirm" type="password" placeholder="Confirm password" onChange={this.handleChange}/>
        <input type="button" value="Create an account!" onClick={this.createUser} />
      </form>
    );
  }
}
export default CreateUser;