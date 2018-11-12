import React, { Component } from 'react';
import Post from './Post'

export default class Comments extends Component {

  showPosts = () => {
    return this.props.postComments.map(function (post) {
      return <Post key={post.id} post={post}/>
    })
  }

  render() {

    return (
      <div>
        <h2 id='commented-header'>Commented Posts:</h2>
        <div >
          {this.showPosts()}
        </div>
      </div>
    );
  }
}
