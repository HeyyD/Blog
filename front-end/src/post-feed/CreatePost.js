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
        console.log('here');
    }

    render() {

        console.log(this.state.userId);

        return(
            <div className="Create-post-container">
                <form className="Create-post">
                    <input name="title" type="text" placeholder="Title" onChange={this.handleChange}/>
                    <textarea name="content" placeholder="Content" onChange={this.handleChange}/>
                    <input type="button" value="Post" onClick={this.post} disabled={!this.state.loggedIn}/>
                </form>
            </div>
        );
    }
}
export default CreatePost;