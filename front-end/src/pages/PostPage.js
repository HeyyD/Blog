import React, { Component } from 'react';
import '.././index.css';

class PostPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <p>{this.props.id}</p>
  }
}
export default PostPage;