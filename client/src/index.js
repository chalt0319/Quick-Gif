import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import postReducer from './components/reducers/postReducer'
import LikesContainer from './components/containers/LikesContainer'
import CommentContainer from './components/containers/CommentContainer'
import UsersContainer from './components/containers/UsersContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(postReducer, applyMiddleware(thunk));

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <React.Fragment>
         <Route exact path="/" component={App} />
         <Route exact path="/likes" component={LikesContainer} />
         <Route exact path="/comments" component={CommentContainer} />
         <Route exact path="/users" component={UsersContainer} />
      </React.Fragment>
    </Router>
 </Provider>),
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
