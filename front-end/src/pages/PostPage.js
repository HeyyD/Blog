import React, { Component } from 'react';

import MainMenu from './../mainmenu/MainMenu';

import '.././index.css';
import $ from "jquery";

class PostPage extends Component {

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      title: '',
      content: ''
    }
  }

  componentWillMount(){
    let url = window.location.href;

    fetch(url).then(res => res.json()).then(result => {
      this.setState({
        title: result.title,
        content: result.content
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
          <p>{this.state.content}</p>
        </div>
      </div>
      );
  }
}
export default PostPage;