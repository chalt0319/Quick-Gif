import React, { Component } from 'react';
import SearchInput from './SearchInput'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { dispatchFunction } from './dispatch'

class Instagram extends Component {

  state = {
    searchText: ""
  }

  componentDidMount() {
      this.props.dispatchFunction("funny")
  }

  searchBar = (word) => {
    this.props.dispatchFunction(word)
  }

  scrollUp = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {

    return (
      <div>
      <Link to='/'>
        <img id="home" src='http://images.clipartpanda.com/stick-family-clipart-black-and-white-white-house-md.png' alt="Home"/>
      </Link>
      <Link to='/likes'>
        <img id="heart" onClick={this.scrollUp}  src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png' alt="Heart"/>
      </Link>
      <Link to='/comments'>
        <img id="comment" onClick={this.scrollUp} src='http://www.clker.com/cliparts/e/D/y/m/U/t/speech-bubble-hi.png' alt="Comment"/>
      </Link>
      <Link to='/users'>
        <img id="user" onClick={this.scrollUp} src='https://mbtskoudsalg.com/images/user-avatar-png-7.png' alt="User"/>
      </Link>
      <SearchInput searchBar={this.searchBar}/>
      <img id="scroll" onClick={this.scrollUp} src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png' alt="scroll"/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchFunction: (word) => dispatch(dispatchFunction(word))
  }
}

export default connect(null, mapDispatchToProps)(Instagram)
