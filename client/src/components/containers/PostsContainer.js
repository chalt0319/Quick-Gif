import React, { Component } from 'react';
import Posts from '../stateless/Posts'
import { connect } from 'react-redux';

class PostsContainer extends Component {
  render() {

    return (
      <div>
        <h2 id='posts-header'>All Posts:</h2>
        <Posts posts={this.props.posts}/>
        <img id="pikachu" src='https://camo.githubusercontent.com/9be29021cfdb21b2cc257a3efcb269f64d42f5b6/687474703a2f2f32352e6d656469612e74756d626c722e636f6d2f63393961353739646233616530666331363462663463636131343838383564332f74756d626c725f6d6a6776386b45754d67317338376e37396f315f3430302e676966' alt="Pikachu"/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
  }
}

export default connect(mapStateToProps)(PostsContainer)
