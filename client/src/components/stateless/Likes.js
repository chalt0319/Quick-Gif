import React, { Component } from 'react';
import Post from './Post'

export default class Likes extends Component {

  showLikes = () => {
    return this.props.likes.map(function (post) {
      return <Post key={post.id} post={post}/>
    })
  }

  render() {

    return (
      <div>
        <h2 id='likes-header'>Liked Posts:</h2>
        <div >
          {this.showLikes()}
        </div>
      </div>
    );
  }
}
