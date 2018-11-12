import React, { Component } from 'react';
import User from './User'
import UserForm from '../containers/UserForm'

export default class Users extends Component {

  showUsers = () => {
    return this.props.users.map(function (user) {
      return <User key={user.id} user={user}/>
    })
  }

  render() {

    return (
      <div >
        <h2 id='users-header'>All Users:</h2>
        <UserForm updateUsers={this.props.updateUsers} />
        {this.showUsers()}
      </div>
    );
  }
}
