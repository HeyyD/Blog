import React, { Component } from 'react';
import './Post.css'

class Post extends Component {

  constructor(props) {
    super(props);
    this.state = {'username': 'none'};
  }

  componentDidMount(){
    let url = window.location.href + '/users/' + this.props.userId;
    fetch(url).then(result => result.json())
              .then(res => {
                this.setState({'username': res.username})
              });
  }

  render() {
    return (
      <div className="Post">
        <a href="/posts"></a>
        <h2>{this.props.title}</h2>
        <h5>{this.state.username + ' | ' + this.props.date}</h5>
        <p>{this.props.content}</p>
      </div>
    );
  }
}
export default Post;