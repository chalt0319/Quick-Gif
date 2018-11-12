import React, { Component } from 'react';
import Likes from '../stateless/Likes'
import { connect } from 'react-redux';
import Instagram from './Instagram'

class LikesContainer extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <Instagram />
        </header>
        <Likes likes={this.props.likes}/>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    likes: state.likes,
  }
}

export default connect(mapStateToProps)(LikesContainer)
