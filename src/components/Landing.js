import React, { Component } from 'react'
import { connect } from 'react-redux'
import d2logo from '../assets/d2logo.png'
import { grabUser } from '../actions/user'

class Landing extends Component {

  // Temporarily using component state for testing
  constructor(props) {
    super(props)

    this.state = {
      username: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSelectPlatform = this.onSelectPlatform.bind(this)
  }

  onChange(e) {
    // e.preventDefault()
    this.setState({ [e.target.name]: e.target.value })
  }

  onSelectPlatform(e) {
    // action here to fetch from api
    // send platform and this.state.username
    e.preventDefault()
    let platform = parseInt(e.target.value)

    this.props.grabUser(this.state.username, platform)
    // probably want to redirect
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
            <button className="fas fa-desktop" onClick={this.onSelectPlatform} name="platform" value="4"></button>
            <button className="fab fa-playstation" onClick={this.onSelectPlatform} name="platform" value="2"></button>
            <button className="fab fa-xbox" onClick={this.onSelectPlatform} name="platform" value="1"></button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps, { grabUser })(Landing)