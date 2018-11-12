import React, { Component } from 'react';
import { connect } from 'react-redux';


class Like extends Component {

  handleClick = () => {
    this.props.dispatch({type: 'DELETE_COMMENT', comment: this.props.comment, post: this.props.post})
  }

  render() {

    return (

        <img className='delete' onClick={this.handleClick} src='https://image.flaticon.com/icons/png/512/61/61918.png' alt='Delete'/>

    );
  }
}

export default connect()(Like)
