import React, { Component } from 'react';
import './MainMenu.css';

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
            links.push(<a href="/posts">Post</a>);
        }

        return(
            <div className="Main-menu-panel">
                {links}
            </div>
        );
    }
}
export default MainMenu;