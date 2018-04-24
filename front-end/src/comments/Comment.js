import React, { Component } from 'react';

class Comment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      date: '',
      content: ''
    }
  }

  componentWillMount() {
    fetch(window.location.origin + '/users/' + this.props.userId)
      .then(res => res.json())
      .then(result => {
        this.setState({
          username: result.username,
          date: this.props.date,
          content: this.props.content
        });
      })
  }

  render() {
    return(
      <div>
        <h4>{this.state.username} | {this.props.date}</h4>
        <p>{this.state.content}</p>
      </div>
    );
  }
}
export default Comment;