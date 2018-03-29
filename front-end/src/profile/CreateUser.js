import React, { Component } from 'react';
import './CreateUser.css';

class CreateUser extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.createUser = this.createUser.bind(this);
    this.checkInformation = this.checkInformation.bind(this);

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

  checkInformation() {
    if(this.state.password !== this.state.confirm) {
      this.setState({errorMessage: 'Passwords do not match'})
    } else if (this.state.password.length < 6) {
      this.setState({errorMessage: 'Passwords must be at least 6 characters long'})
    } else if (this.state.username.length < 5) {
      this.setState({errorMessage: 'Username has to be atleas 5 characters long'})
    } else {
      this.createUser();
    }
  }

  createUser() {
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
  }

  render() {
    return(
      <form className="Create-account">
        <h5>{this.state.errorMessage}</h5>
        <input name="username" type="text" placeholder="Username" onChange={this.handleChange}/>
        <input name="password" type="password" placeholder="Password" onChange={this.handleChange}/>
        <input name="confirm" type="password" placeholder="Confirm password" onChange={this.handleChange}/>
        <input type="button" value="Create an account!" onClick={this.checkInformation} />
      </form>
    );
  }
}
export default CreateUser;