import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './index.css';
import App from './App';
import CreateUser from './profile/CreateUser';
import CreatePost from './post-feed/CreatePost';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div>
        <Route exact path="/" component={App}/>
        <Route path="/users" component={CreateUser}/>
        <Route path="/posts" component={CreatePost}/>
    </div>
  </Router>
  , document.getElementById('root')
);
registerServiceWorker();