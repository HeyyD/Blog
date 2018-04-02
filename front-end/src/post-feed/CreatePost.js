import React, { Component } from 'react';
import './CreatePost.css'


class CreatePost extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            title: '',
            content: ''
        }
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return(
            <div className="Create-post-container">
                <form className="Create-post">
                    <input name="title" type="text" placeholder="Title" onChange={this.handleChange}/>
                    <textarea name="content" placeholder="Content" onChange={this.handleChange}/>
                    <input type="button" value="Post"/>
                </form>
            </div>
        );
    }
}
export default CreatePost;