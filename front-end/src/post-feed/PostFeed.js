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
                  let title = res[i].title;
                  let content = res[i].content;
                  let date = res[i].date;
                  let id = res[i].userId;
                  temporary.push(<Post key={i} userId={id} title={title} content={content} date={date}/>);
                }
                this.setState({'posts': temporary});
              })
              .catch(function(error) {console.log(error)});
  }

  render() {
    return(
      <div>
        {this.state.posts}
      </div>
    );
  }
}

export default PostFeed;