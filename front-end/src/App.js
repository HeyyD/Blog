import React, { Component } from 'react';
import './index.css';
import $ from 'jquery';
import PostFeed from './post-feed/PostFeed';
import MainMenu from './mainmenu/MainMenu';

class App extends Component {

    /*
        $(document).ready(function() {
           $(window).on('scroll', function() {
            if($(window).scrollTop() < 1000) {
              $('.hero').css('background-size', 130 + parseInt($(window).scrollTop() / 5) + '%');
              $('.hero h1').css('top', 50 + ($(window).scrollTop() * .1) + '%');
              $('.hero h1').css('opacity', 1 - ($(window).scrollTop() * .003));
            }

             if($(window).scrollTop() >= $('.content-wrapper').offset().top - 300) {
               $('.nav-bg').removeClass('bg-hidden');
               $('.nav-bg').addClass('bg-visible');
             } else {
               $('.nav-bg').removeClass('bg-visible');
               $('.nav-bg').addClass('bg-hidden');
             }
          });
        });
     */

    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll() {
        if($(window).scrollTop() < 1000) {
            $('.hero').css('background-size', 130 + parseInt($(window).scrollTop() / 5) + '%');
            $('.hero h1').css('top', 50 + ($(window).scrollTop() * .1) + '%');
            $('.hero h1').css('opacity', 1 - ($(window).scrollTop() * .003));
        }

        if($(window).scrollTop() >= $('.content-wrapper').offset().top - 300) {
            $('.nav-bg').removeClass('bg-hidden');
            $('.nav-bg').addClass('bg-visible');
        } else {
            $('.nav-bg').removeClass('bg-visible');
            $('.nav-bg').addClass('bg-hidden');
        }
    }

    render() {
        return (
          <div className="App">
            <header className="hero">
              <div className="User-profile">
                <MainMenu/>
              </div>
              <h1 className="App-title">Blog Site</h1>
            </header>
            <div className="content-wrapper">
                <PostFeed/>
            </div>
          </div>
        );
    }
}
export default App;
