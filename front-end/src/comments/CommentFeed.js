import React, { Component } from 'react';

import Comment from "./Comment";

import './CommentFeed.css';

class CommentFeed extends Component {

  constructor(props) {
    super(props);
    this.onHandleChange = this.onHandleChange.bind(this);
    this.postComment = this.postComment.bind(this);

    this.state = {
      comment: '',
      comments: [],
      currentUserId: ''
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

    fetch(window.location.origin + '/users/current')
      .then(result => result.json())
      .then(res => {
        this.setState({
          currentUserId: res.id
        })
      })
  }

  onHandleChange(event) {
    this.setState({
      comment: event.target.value
    })
  }

  postComment(event) {

    if(this.state.comment.length > 0){
      let url = window.location.origin + '/posts/comments';
      let data = {
        postId: this.props.postId,
        userId: this.state.currentUserId,
        content: this.state.comment
      };

      fetch(url, {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      }).catch(error => console.log(error));

    }
    else
      alert('You cannot leave an empty comment');
  }

  render() {
    return(
      <div className="Comment-feed">
        <form className="Comment-form">
          <textarea placeholder="Comment" onChange={this.onHandleChange}></textarea>
          <a href='' onClick={this.postComment}>Leave a comment</a>
        </form>
        <div>
          {this.state.comments}
        </div>
      </div>
    );
  }
}
export default CommentFeed;