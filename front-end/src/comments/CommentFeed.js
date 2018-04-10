import React, { Component } from 'react';

import Comment from "./Comment";

import './CommentFeed.css';

class CommentFeed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
  }

  componentWillMount() {
    fetch(window.location.href + '/comments')
      .then(res => res.json())
      .then(result => {
        for(let c of result) {
          this.state.comments.push(<Comment key={c.id} userId={c.userId} content={c.content}/>);
        }
      });
  }

  render() {
    return(
      <div className="Comment-feed">
        <form className="Comment-form">
          <textarea placeholder="Comment"></textarea>
          <a href=''>Leave a comment</a>
        </form>
        {this.state.comments}
      </div>
    );
  }
}
export default CommentFeed;