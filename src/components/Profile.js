import React, { Component } from 'react'
import { connect } from 'react-redux'
import CharacterSelector from './CharacterSelector'

class Profile extends Component {

  renderUser() {
    const username = this.props.users.username

    return (

      <div>
        <h2>{username}</h2>
      </div>

    )
  }

  renderCharacters() {
    const characters = this.props.users.characters
    // make sure characters isn't an empty object
    let charList = [];
    if (characters.length > 0) {

      // debugger
      // for (let character in characters) {
      //   let bannerPath = characters[character].emblemPath
      //   debugger;

      // }

      charList = characters.map((character) => {
        return (
          <CharacterSelector character={character}></CharacterSelector>
        )
      })

    }

    return (
      <div className="character-select">
        {charList}
      </div>
    )
  }

  render() {
    // we need to create a div to hold the character selection components
    // - should that div be a component itself? Its not really going to be reused anywhere
    //   then we need to loop over the characters in the state
    //      grab their emblem + light level + whatever else
    //        clicking a class should load a new component (CharacterDetails?)
    //          CharacterDetails will fire a request to the API to grab the character data
    return (
      <div className="profile-main">

        {this.props.users.username ? this.renderUser() : "NO USER"}

        <div className="character-menu">
          {this.renderCharacters()}
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps)(Profile)