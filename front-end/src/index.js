import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './index.css';
import App from './App';
import CreateUser from './pages/CreateUser';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/users" component={CreateUser}/>
        <Route path="/posts/:id" render={(props) => {
            return <PostPage id={props.match.params.id}/>
        }}/>
        <Route path="/posts" component={CreatePost}/>
      </Switch>

    </div>
  </Router>
  , document.getElementById('root')
);
registerServiceWorker();