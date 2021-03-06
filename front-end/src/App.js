import React, { Component } from 'react';
import './index.css';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PostFeed from './post-feed/PostFeed';
import MainMenu from './mainmenu/MainMenu';
import CreateUser from "./pages/CreateUser";
import CreatePost from "./pages/CreatePost";
import PostPage from './pages/PostPage';

class App extends Component {

    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.setUserData = this.setUserData.bind(this);

        this.state = {
          userData: {
            loggedIn: false,
            userId: '',
            username: ''
          }
        };
    }

    componentWillMount() {

      let storage = window.localStorage;

      this.setState({
        userData: {
          loggedIn: storage.getItem('loggedIn') === ('true'),
          userId: storage.getItem('userId'),
          username: storage.getItem('username')
        }
      });
    }

    setUserData(result) {

      let storage = window.localStorage;

      storage.setItem('loggedIn', result.loggedIn.toString());
      storage.setItem('userId', result.userId);
      storage.setItem('username', result.username);

      this.setState({
        userData: {
          loggedIn: result.loggedIn,
          userId: result.userId,
          username: result.username
        }
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
        <Router>
          <div>
            <Switch>
              <Route exact path="/" render={() => {
                return(
                <div className="App">
                  <header className="hero">
                    <MainMenu userData={this.state.userData} setUserData={this.setUserData}/>
                    <h1>Blog Site</h1>
                  </header>
                  <div className="content-wrapper">
                    <PostFeed/>
                  </div>
                </div>
                )
              }}/>
              <Route path="/users" component={CreateUser}/>
              <Route path="/posts/:id" render={(props) => {
                return <PostPage id={props.match.params.id} userData={this.state.userData} setUserData={this.setUserData}/>
              }}/>
              <Route path="/posts" render={() => {
                return <CreatePost userData={this.state.userData}/>
              }}/>
            </Switch>

          </div>
        </Router>
      );
    }
}
export default App;
