import React, { Component } from 'react';
import Post from './Post'

class PostFeed extends Component {

  constructor(props) {
    super(props);
    this.createFeed = this.createFeed.bind(this);
  }

  componentDidMount() {
    let url = 'http://localhost:8080/posts'
    fetch(url).then(result => result.json())
              .then(res => this.createFeed(res));
  }

  createFeed(json) {
    for(let i = 0; i < json.length; i++) {
      console.log(json[i].title);
    }
  }

  render() {
    return(
      <div>
        <Post title='title' content='content'/>
      </div>
    );
  }
}

export default PostFeed;