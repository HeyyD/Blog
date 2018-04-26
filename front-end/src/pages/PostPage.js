import React, { Component } from 'react';

import MainMenu from './../mainmenu/MainMenu';
import CommentFeed from './../comments/CommentFeed';

import '.././index.css';
import $ from "jquery";
import LikeButton from "../buttons/LikeButton";

class PostPage extends Component {

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.setContent = this.setContent.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.state = {
      title: '',
      username: '',
      date: '',
      content: '',
      userId: ''
    }
  }

  componentWillMount(){
    fetch(window.location.href)
      .then(res => res.json())
      .then(result => {
        if(result !== null)
          this.setContent(result)
      })
      .catch(error => console.log(error));

  }

  setContent(json) {
    fetch(window.location.origin + '/users/' + json.userId)
      .then(res => res.json())
      .then(result => {
        this.setState({
          title: json.title,
          username: result.username,
          date: json.date,
          content: json.content,
          userId: json.userId
        })
      })
      .catch(error => console.log(error));
    console.log("setContent" + this.state.userId);
    console.log("content " + this.state.content);
  }

  componentDidMount() {
    $('.nav-bg').addClass('bg-visible');
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    if($(window).scrollTop() < 1000) {
      $('.hero').css('background-size', 130 + parseInt($(window).scrollTop() / 5) + '%');
      $('.hero h1').css('top', 50 + ($(window).scrollTop() * .1) + '%');
      $('.hero h1').css('opacity', 1 - ($(window).scrollTop() * .003));
    }

    if($(window).scrollTop() >= $('.content-wrapper').offset().top - 300) {
      $('.nav-bg').removeClass('bg-visible');
      $('.nav-bg').addClass('bg-hidden');
    } else {
      $('.nav-bg').removeClass('bg-hidden');
      $('.nav-bg').addClass('bg-visible');
    }
  }

  deletePost() {
    console.log("userData.userId: " + this.props.userData.userId);
    console.log("userId: " + this.state.userId);
    if (this.props.userData.userId == this.state.userId) {
      let url = window.location.href;
      let data = {
          title: this.state.title,
          content: this.state.content,
          userId: this.props.userId
      };

      fetch(url, {
          body: JSON.stringify(data),
          headers: {
              "Content-Type": "application/json"
          },
          method: "DELETE"
      }).then(result => {
          console.log(result);
      });
    } else {
      alert('You can only delete your own posts!')
    }
  }


  render() {
    return (
      <div>
        <header className="hero">
          <MainMenu userData={this.props.userData} setUserData={this.props.setUserData}/>
          <h1>{this.state.title}</h1>
        </header>
        <div className="content-wrapper">
          <h3>{this.state.username}</h3>
          <h4>{this.state.date}</h4>
          <p>{this.state.content}</p>
          <button onClick={this.deletePost}>Delete</button>
          <CommentFeed postId={this.props.id} userData={this.props.userData}/>
        </div>
      </div>
      );
  }
}
export default PostPage;