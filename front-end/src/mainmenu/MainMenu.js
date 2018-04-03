import React, { Component } from 'react';
import './../index.css';

class MainMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
    }

    componentWillMount() {
        let url = window.location.href + '/login';
        fetch(url).then(result => result.json())
                  .then(res =>
                      this.setState({
                          loggedIn: res
                      })
                  );
    }

    render() {

        let links = [];

        if(this.state.loggedIn) {
            links.push(<a key="1" href="/posts">Post</a>);
        }

        return(
            <nav>
                <div className="nv-bg">
                    <ul>{links}</ul>
                </div>
            </nav>
        );
    }
}
export default MainMenu;