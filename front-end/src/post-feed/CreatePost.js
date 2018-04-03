import React, { Component } from 'react';
import './CreatePost.css'


class CreatePost extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.post = this.post.bind(this);
        this.state = {
            title: '',
            content: '',
            userId: 0,
            loggedIn: false
        }
    }

    componentWillMount() {
        fetch(window.location.origin + '/current_user')
            .then(res => res.json())
            .then(result => {
                this.setState({
                    userId: result.id,
                    loggedIn: true
                })
            }).catch(error => {
                console.log(error);
                this.setState({loggedIn: false});
        });
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    post() {

        if(this.state.loggedIn){
            let url = window.location.href;
            let data = {
                title: this.state.title,
                content: this.state.content,
                userId: this.state.userId
            }

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