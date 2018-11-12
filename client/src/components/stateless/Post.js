import React from 'react';
import Like from './Like'
import Title from './Title'
import Comment from './Comment'

const Post = (props) => {
  return (
    <div className="image-box">
      <Title title={props.post.title}/>
      <img className="post-image" src={props.post.images.original.url} alt={props.post.slug}/>
      <span><Like post={props.post}/>
      <Comment post={props.post}/></span>
    </div>
 )
}

export default Post
