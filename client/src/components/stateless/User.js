import React, { Component } from 'react';

export default class User extends Component {

  state = {
    likes: 0
  }

  handleClick = () => {
    const newLIkes = this.state.likes + 1
    this.setState({
      likes: newLIkes
    })
  }
  render() {

    return (
        <div className="user-box">
          <img className="user-image" src={this.props.user.pic_url} alt={this.props.user.name}/>
          <img onClick={this.handleClick} className="user-thumbsup" src='https://cdn0.iconfinder.com/data/icons/elite-emoticons/512/thumbs-up-512.png' alt="Thumbs Up"/>
          <div className="user-likes">{this.state.likes}</div>
          <div className="username">{this.props.user.name}</div>

        </div>
    );
  }
}
