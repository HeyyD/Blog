import React, { Component } from 'react';
import './Post.css'

class Post extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Post">
        <h2>{this.props.title}</h2>
        <p>{this.props.content}</p>
      </div>
    );
  }
}
export default Post;