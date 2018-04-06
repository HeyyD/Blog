import React, { Component } from 'react';

import MainMenu from './../mainmenu/MainMenu';
import CommentFeed from './../comments/CommentFeed';

import '.././index.css';
import $ from "jquery";

class PostPage extends Component {

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.setContent = this.setContent.bind(this);
    this.state = {
      title: '',
      username: '',
      date: '',
      content: ''
    }
  }

  componentWillMount(){
    fetch(window.location.origin + '/posts/' + this.props.id)
      .then(res => res.json())
      .then(result => this.setContent(result));

  }

  setContent(json) {
    fetch(window.location.origin + '/users/' + json.userId)
      .then(res => res.json())
      .then(result => {
        this.setState({
          title: json.title,
          username: result.username,
          date: json.date,
          content: json.content
        })
      });
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

  render() {
    return (
      <div>
        <header className="hero">
          <MainMenu/>
          <h1>{this.state.title}</h1>
        </header>
        <div className="content-wrapper">
          <h3>{this.state.username}</h3>
          <h4>{this.state.date}</h4>
          <p>{this.state.content}</p>
          <CommentFeed/>
        </div>
      </div>
      );
  }
}
export default PostPage;