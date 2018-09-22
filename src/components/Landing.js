import React, { Component } from 'react'
import d2logo from '../assets/d2logo.png'

class Landing extends Component {

  // Temporarily using component state for testing
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      platform: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSelectPlatform = this.onSelectPlatform.bind(this)
  }

  onChange(e) {
    // e.preventDefault()
    this.setState({ [e.target.name]: e.target.value })
  }

  onSelectPlatform(e) {
    //action 
    //send username and platform 
    let platform = parseInt(e.target.value)
  }

  render() {
    return (
      <div className="landing">
        <img src={d2logo} alt="" />

        <form className="landing-form">
          <h5>Enter your username, then select your platform to begin</h5>

          <input
            onChange={this.onChange}
            type="text"
            name="username"
            value={this.state.username}
            className="form-control form-control-lg"
            placeholder="Choose Your Guardian" />

          <div className="platform-buttons">
            <button className="fas fa-desktop" onClick={this.onSelectPlatform} name="platform" value="pc"></button>
            <button className="fab fa-playstation" onClick={this.onSelectPlatform} name="platform" value="playstation"></button>
            <button className="fab fa-xbox" onClick={this.onSelectPlatform} name="platform" value="xbox"></button>
          </div>
        </form>
      </div>
    )
  }
}

export default Landing