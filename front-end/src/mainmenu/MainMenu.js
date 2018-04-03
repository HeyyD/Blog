import React, { Component } from 'react';
import './../index.css';
import Login from "../profile/Login";

class MainMenu extends Component {

    constructor(props) {
        super(props);
        this.signOut = this.signOut.bind(this);
        this.state = {
            username: '',
            loggedIn: false
        }
    }

    componentWillMount() {
        let url = window.location.href;

        fetch(url + '/login').then(result => result.json())
            .then(res => {
                this.setState({loggedIn: res});

                if(res === true) {
                    fetch(url + '/current_user').then(res => res.json())
                        .then(result => {
                            this.setState({username: result.username});
                        });
                }

            });
    }

    signOut(){

        let url = window.location.href + '/logout'

        fetch(url);

        this.setState({
            loggedIn: false
        });

        window.location.reload();
    }

    render() {

        if(this.state.loggedIn) {
            return(
                <nav>
                    <div className="nv-bg">
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
                    <div className="nv-bg">
                        <Login/>
                    </div>
                </nav>
            );
        }
    }
}
export default MainMenu;