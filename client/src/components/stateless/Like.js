import React, { Component } from 'react';
import { connect } from 'react-redux';


class Like extends Component {

  handleClick = () => {
    this.props.dispatch({type: 'LIKE_POST', post: this.props.post})
  }

  render() {

    return (

        <img className="heart" onClick={this.handleClick} src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png' alt="Heart"/>

    );
  }
}

export default connect()(Like)
