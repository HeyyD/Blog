import React, { Component } from 'react';
import './CreatePost.css'


class CreatePost extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.post = this.post.bind(this);
        console.log(this.props)
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    post() {

        if(this.props.userData.loggedIn){
            let url = window.location.href;
            let data = {
                title: this.state.title,
                content: this.state.content,
                userId: this.props.userData.userId
            };

            fetch(url, {
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST"
            }).then(result => {
                console.log(result);
            });
        } else {
            alert('You need to be logged in to post!');
        }
    }

    render() {
        return(
            <div className="Create-post-container">
                <form className="Create-post">
                    <input name="title" type="text" placeholder="Title" onChange={this.handleChange}/>
                    <textarea name="content" placeholder="Content" onChange={this.handleChange}/>
                    <a href="/" onClick={this.post}>Post</a>
                </form>
            </div>
        );
    }
}
export default CreatePost;