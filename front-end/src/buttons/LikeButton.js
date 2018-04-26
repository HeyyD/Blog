import React, { Component } from 'react';

class LikeButton extends Component {

    constructor(props) {
        super(props);
        this.updateLike = this.updateLike.bind(this);

        this.state = {
            likeNumber: ""
        };
    }

    updateLike(event) {

        event.preventDefault();

        let url = window.location.href;// + 'posts/' + this.props.id;
        let data = this.props.userId;

        fetch(url, {
            body: data,
            method: "POST"
        }).then((response) => {
            this.setState({likeNumber: response});
        });

        console.log(this.state.likeNumber);
    }

    render() {
        return(
            <a href="" onClick={this.updateLike}> Like  {this.state.likeNumber}</a>
        );
    }
}
export default LikeButton;