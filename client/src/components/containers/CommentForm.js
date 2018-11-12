import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentForm extends Component {

  state = {
    text: ""
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleClick = () => {
    this.props.dispatch({type: 'ADD_COMMENT', comment: this.state.text, post: this.props.post})
    this.setState({
      text: ""
    })
  }

  render() {

    return (
      <span>
        <input onChange={this.handleChange} type="text" value={this.state.text} size="70" placeholder="Add a comment"></input>
        <input type='image' className='comment' onClick={this.handleClick} src='http://www.clker.com/cliparts/e/D/y/m/U/t/speech-bubble-hi.png' alt='comment'></input>
      </span>
    );
  }
}

export default connect()(CommentForm)
