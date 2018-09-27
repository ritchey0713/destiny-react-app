import React, { Component } from 'react'
import { connect } from 'react-redux'

class Profile extends Component {

  // componentDidMount() {
  //   debugger;
  // }

  renderUser() {
    const username = this.props.users.username
    // debugger;
    return (

      <div>
        <h2>{username}</h2>
      </div>

    )
  }

  render() {
    // debugger
    return (
      <div>

        {this.props.users.username ? this.renderUser() : "NO USER"}
        search destiny player dump

      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps)(Profile)