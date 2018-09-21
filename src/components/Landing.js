import React, { Component } from 'react'
import d2logo from '../assets/d2logo.png'

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <img src={d2logo} alt="" />

        <input type="text" className="form-control form-control-lg" placeholder="Choose Your Guardian" />
      </div>
    )
  }
}

export default Landing