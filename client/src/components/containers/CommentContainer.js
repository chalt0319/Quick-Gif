import React, { Component } from 'react';
import Comments from '../stateless/Comments'
import { connect } from 'react-redux';
import Instagram from './Instagram'

class LikesContainer extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <Instagram />
        </header>
        <Comments postComments={this.props.postComments} />

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    postComments: state.postComments
  }
}

export default connect(mapStateToProps)(LikesContainer)
