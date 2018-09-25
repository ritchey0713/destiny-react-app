import { BrowserRouter as Router } from 'react-router-dom';

const API_KEY = process.env.REACT_APP_API_KEY
const API_URL = "https://www.bungie.net/Platform/Destiny2"

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
export const grabUser = (userName, platform, history) => {
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
      mode: 'cors'
    })
      .then(response => response.json())
      // .then(user => {
      //   dispatch(getUser(user))
      // })
      .then(response => dispatch(getProfile(response.Response[0])))
      // .then(history.push('/profile'))
      .catch(err => console.log(err))

  }
}

const getProfile = (user) => {
  // /Destiny2/{membershipType}/Profile/{destinyMembershipId}/?components=???
  // https://www.bungie.net/Platform/Destiny2/2/Profile/4611686018475843998/?components=200
  console.log(user)
  let membershipId = parseInt(user.membershipId)
  // debugger;
  return dispatch => {
    return fetch(`${API_URL}/${user.membershipType}/Profile/${user.membershipId}/?components=200`, {
      method: "GET",
      headers: new Headers({
        'Content-Type': 'application/json, charset=utf-8',
        'Origin': '*',
        "X-API-Key": API_KEY
      }),
      mode: 'cors'
    })
      .then(response => response.json())
      .then(user => {
        debugger;
        dispatch(getUser(user))
      })
      .catch(err => console.log(err))
  }
}