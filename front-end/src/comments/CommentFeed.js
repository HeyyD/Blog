import React, { Component } from 'react';

import './Comment';
import Comment from "./Comment";

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
      <div>
        {this.state.comments}
      </div>
    );
  }
}
export default CommentFeed;