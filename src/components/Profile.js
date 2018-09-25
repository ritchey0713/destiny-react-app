import React, { Component } from 'react'
import { connect } from 'react-redux'

class Profile extends Component {

  // componentDidMount() {
  //   debugger;
  // }

  renderUser() {
    const user = this.props.users.user

    return (

      <div>
        <h2>{user.displayName}</h2>
      </div>

    )
  }

  render() {
    // debugger
    return (
      <div>

        {this.props.users.user ? this.renderUser() : "NO USER"}
        search destiny player dump

      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps)(Profile)