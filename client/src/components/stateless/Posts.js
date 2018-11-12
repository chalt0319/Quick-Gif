import React, { Component } from 'react';
import Post from './Post'

export default class Posts extends Component {

  showPosts = () => {
    return this.props.posts.map(function (post) {
      return <Post key={post.id} post={post}/>
    })
  }

  render() {

    return (
      <div >
        {this.showPosts()}
      </div>
    );
  }
}
