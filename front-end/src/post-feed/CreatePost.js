import React, { Component } from 'react';
import './CreatePost.css'


class CreatePost extends Component {
    render() {
        return(
            <div className="Create-post-container">
                <form className="Create-post">
                    <input name="title" type="text" placeholder="Title"/>
                    <textarea name="content" placeholder="Content"/>
                    <input type="button" value="Post"/>
                </form>
            </div>
        );
    }
}
export default CreatePost;