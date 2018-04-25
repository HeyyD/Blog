import React, { Component } from 'react';

class LikeButton extends Component {

    constructor(props) {
        super(props);
        this.updateLike = this.updateLike.bind(this);

        this.state = {
            likeNumber: ""
        };
    }

    updateLike() {
        let url = window.location.href + '/posts/' + this.props.id;
        let data = {}; //TODO add user id to data

        fetch(url, {
            body: data,
            method: "POST"
        }).then((response) => {
            this.setState({likeNumber: response});
        });
    }

    render() {
        return(
            <button onClick={this.updateLike}>Like  {this.state.likeNumber}</button>
        );
    }
}
export default LikeButton;