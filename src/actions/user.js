import Traveler from 'the-traveler'


const API_KEY = process.env.REACT_APP_API_KEY
const API_URL = "https://www.bungie.net/Platform/Destiny2"

const traveler = new Traveler({
  apikey: API_KEY
})

const getUser = user => {
  return {
    type: "GET_USER_INFO",
    user
  }
}

///Destiny2/{membershipType}/Profile/{destinyMembershipId}/

// /Destiny2/SearchDestinyPlayer/{membershipType}/{displayName}/

//https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/2/hoombauer
//https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/2/hoombauer
export const grabUser = (userName, platform) => {
  console.log("API KEY - ", API_KEY)
  // debugger;
  return dispatch => {
    return fetch(`${API_URL}/SearchDestinyPlayer/${platform}/${userName}`, {
      method: "GET",
      headers: new Headers({
        'Content-Type': 'application/json, charset=utf-8',
        'Origin': '*',
        "X-API-Key": API_KEY
      }),
      mode: 'no-cors'
    })
      .then(response => {
        debugger;
      })
      .then(user => {
        dispatch(getUser(user))
      })
      .catch(err => console.log(err))
  }
}