import React, { Component } from 'react';
import Post from './Post'

class PostFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {'posts': []};
  }

  componentDidMount() {
    let url = 'http://localhost:8080/posts'
    fetch(url).then(result => result.json())
              .then(res => this.setState({'posts': res}));
  }

  render() {

    let posts = [];

    for(let i = 0; i < this.state.posts.length; i++) {
      let title = this.state.posts[i].title;
      let content = this.state.posts[i].content;
      let date = this.state.posts[i].date;
      posts.push(<Post title={title} content={content} date={date}/>);
    }

    return(
      <div>
        {posts}
      </div>
    );
  }
}

export default PostFeed;