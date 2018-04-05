import React, { Component } from 'react';
import './../index.css';
import Login from "../profile/Login";

class MainMenu extends Component {

    constructor(props) {
        super(props);
        this.signOut = this.signOut.bind(this);
        this.signIn = this.signIn.bind(this);
        this.state = {
            username: '',
            loggedIn: false
        }
    }

    componentWillMount() {
        let url = window.location.href;

        fetch(url + '/users/login').then(result => result.json())
            .then(res => {
                this.setState({loggedIn: res});

                if(res === true) {
                    fetch(url + '/users/current').then(res => res.json())
                        .then(result => {
                            this.setState({username: result.username});
                        }).catch(error => console.log(error));
                }

            });
    }

    signOut(event){

        event.preventDefault();

        let url = window.location.href + '/users/logout'

        fetch(url).then(res => this.setState({loggedIn: false}));
    }

    signIn(url, init) {
      fetch(url, init).then(res => res.json())
                      .then(result => {
                          if(result === true) {
                            fetch(window.location.href + '/users/current').then(res => res.json())
                              .then(result => {
                                this.setState({
                                  username: result.username,
                                  loggedIn: result
                                });
                              });
                          }
                      });
    }

    render() {

        if(this.state.loggedIn) {
            return(
                <nav>
                    <div className="nav-bg">
                        <ul>
                            <li><h3>{this.state.username}</h3></li>
                            <li><a key="1" href="/posts">Post</a></li>
                            <li><a key="2" href="" onClick={this.signOut}>Logout</a></li>
                        </ul>
                    </div>
                </nav>
            );
        } else {
            return(
                <nav>
                    <div className="nav-bg">
                        <Login signIn={this.signIn}/>
                    </div>
                </nav>
            );
        }
    }
}
export default MainMenu;