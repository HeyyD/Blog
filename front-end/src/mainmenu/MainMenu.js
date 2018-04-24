import React, { Component } from 'react';
import './../index.css';
import Login from "./Login";

class MainMenu extends Component {

    constructor(props) {
        super(props);
        this.signOut = this.signOut.bind(this);
        this.signIn = this.signIn.bind(this);
    }

    signOut(){
      let data = {
        loggedIn: false,
        userId: '',
        username: ''
      }
      
      this.props.setUserData(data);
    }

    signIn(result) {
      if(result !== null) {
          this.props.setUserData(result);
        }
    }

    render() {

        if(this.props.userData.loggedIn) {
            return(
                <nav>
                    <div className="nav-bg">
                        <ul>
                            <li><h3>{this.props.userData.username}</h3></li>
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