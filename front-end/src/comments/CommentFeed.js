import React, { Component } from 'react';

import Comment from "./Comment";

import './CommentFeed.css';

class CommentFeed extends Component {

  constructor(props) {
    super(props);
    this.onHandleChange = this.onHandleChange.bind(this);
    this.postComment = this.postComment.bind(this);
    this.findCurrentUser = this.findCurrentUser.bind(this);
    this.findLoggedIn = this.findLoggedIn.bind(this);

    this.state = {
      comment: '',
      comments: [],
      currentUserId: '',
      loggedIn: false
    }
  }

  componentWillMount() {

    fetch(window.location.href + '/comments')
      .then(res => res.json())
      .then(result => {
        for(let c of result) {
          this.state.comments.push(<Comment key={c.id} userId={c.userId} date={c.date} content={c.content}/>);
        }
      })
      .then(this.findCurrentUser)
      .catch(error => console.log(error));
  }

  findCurrentUser() {
    fetch(window.location.origin + '/users/current')
      .then(result => result.json())
      //.then(res => this.state = {currentUserId: res.id})
      .then(res => this.findLoggedIn(res.id))
      .catch(error => console.log(error));
  }

  findLoggedIn(id) {
    fetch(window.location.origin + '/users/login')
      .then(res => res.json())
      .then(result => {
        //this.state = {loggedIn: result};
        this.setState({
          currentUserId: id,
          loggedIn: result
        })
      })
      .catch(error => console.log(error));
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
    else {
      event.preventDefault();
      alert('You cannot leave an empty comment');
    }
  }

  render() {

    if(this.state.loggedIn) {
      return(
        <div className="Comment-feed">
          <form className="Comment-form">
            <textarea placeholder="Comment" onChange={this.onHandleChange}/>
            <a href='' onClick={this.postComment}>Leave a comment</a>
          </form>
          <div>
            {this.state.comments}
          </div>
        </div>
      );
    } else {
      return(
        <div className="Comment-feed">
            {this.state.comments}
        </div>
        );
    }
  }
}
export default CommentFeed;