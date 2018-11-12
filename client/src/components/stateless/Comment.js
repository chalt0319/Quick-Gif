import React, { Component } from 'react';
import CommentForm from '../containers/CommentForm'
import Delete from './Delete'
import { connect } from 'react-redux';


class Comment extends Component {

  showComments = (post) => {
    if (this.props.comments !== []) {
      const comments = this.props.comments.filter(function (comment) {
        return comment.postId === post.id
      })
      return comments.map(function (comment) {
        return <React.Fragment key={comment.id} ><li className='comment-li'>{comment.text}</li><Delete comment={comment} post={post}/></React.Fragment>
      })
    }
  }


  render() {

    return (
      <span className='comment-form'>
        <CommentForm post={this.props.post}/>
        <ul>
          {this.showComments(this.props.post)}
        </ul>
      </span>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments,
  }
}


export default connect(mapStateToProps)(Comment)
