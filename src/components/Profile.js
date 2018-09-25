import React, { Component } from 'react'
import { connect } from 'react-redux'

class Profile extends Component {
  render() {
    debugger
    return(
      <div>
     
        search destiny player dump 
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

export default connect(null, mapStateToProps)(Profile)