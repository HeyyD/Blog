import React, { Component } from 'react';

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
        <label>PostFeed</label>
      </div>
    );
  }
}

export default PostFeed;