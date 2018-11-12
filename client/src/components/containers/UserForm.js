import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatchFunctionUser } from './dispatch'

class UserForm extends Component {

  state = {
    name: "",
    pic_url: ""
  }

  handleUsername = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleURL = (e) => {
    this.setState({
      pic_url: e.target.value
    })
  }

  handleSubmit = (e) => {
    const info = {
      name: this.state.name,
      pic_url: this.state.pic_url
    }

    if (this.state.pic_url === "") {
      info.pic_url = "https://png.pngtree.com/element_origin_min_pic/16/12/25/a993726976f4619909704e1177d63658.jpg"
    }

    e.preventDefault()
    this.props.dispatchFunctionUser(info, this.props.updateUsers)
    this.setState({
      name: "",
      pic_url: ""
    })
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit} className="user-form">
        <input onChange={this.handleUsername} type="text" value={this.state.name}  placeholder="Username"></input><span> </span>
        <input onChange={this.handleURL} type="text" value={this.state.pic_url}  size="36" placeholder="Image URL"></input><span> </span>
        <input type='submit' value="Create User"></input>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchFunctionUser: (object, fun) => dispatch(dispatchFunctionUser(object, fun))
  }
}

export default connect(null, mapDispatchToProps)(UserForm)
