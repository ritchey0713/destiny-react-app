import React, { Component } from 'react'

class CharacterSelector extends Component {
  render() {
    let character = this.props.character
    let imgUrl = `https://www.bungie.net/${character.emblemBackgroundPath}`

    // could get:
    //*   baseCharacterLevel
    //*   classType (need to figure out which number applies to which type)
    //    levelProgression
    //*   light
    //    minutesPlayedTotal
    //    percentToNextLevel
    //    stats (what even are these stats?)
    // if (character) {
    //   // debugger;
    let { baseCharacterLevel, classType, levelProgression, light, minutesPlayedTotal, percentToNextLevel, stats } = character
    // }

    // debugger;
    return (
      <div className="character-selection">
        <img src={imgUrl} alt="" />

        <h2 className="block">Class Name</h2>
        <h3 className="align-right block light-lvl">

          Lvl: {baseCharacterLevel}
          <br />
          Light: {light}
        </h3>
      </div>
    )
  }
}

export default CharacterSelector