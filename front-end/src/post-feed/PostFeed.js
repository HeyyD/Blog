import React, { Component } from 'react';
import Post from './Post'

class PostFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {'posts': []};
  }

  componentDidMount() {
    let url = window.location.href + '/posts';
    fetch(url).then(result => result.json())
              .then(res => {
                let temporary = [];
                for(let i = 0; i < res.length; i++) {
                  let id = res[i].id;
                  let title = res[i].title;
                  let content = res[i].content;
                  let date = res[i].date;
                  let userId = res[i].userId;
                  temporary.push(<Post key={i} id={id} userId={userId} title={title} content={content} date={date}/>);
                }
                this.setState({'posts': temporary});
              })
              .catch(function(error) {console.log(error)});
  }

  render() {

    this.state.posts.reverse();

    return(
      <div className="Post-feed">
        {this.state.posts}
      </div>
    );
  }
}

export default PostFeed;