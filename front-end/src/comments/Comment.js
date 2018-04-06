import React, { Component } from 'react';

class Comment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      content: ''
    }
  }

  componentWillMount() {
    fetch(window.location.origin + '/users/' + this.props.userId)
      .then(res => res.json())
      .then(result => {
        this.setState({
          username: result.username,
          content: this.props.content
        });
      })
  }

  render() {
    return(
      <div>
        <h4>{this.state.username}</h4>
        <p>{this.state.content}</p>
      </div>
    );
  }
}
export default Comment;