const API_KEY = process.env.REACT_APP_API_KEY
const API_URL = "https://www.bungie.net/Platform/Destiny2"

const getUser = user => {
  return {
    type: "GET_USER_INFO",
    user
  }
}

///Destiny2/{membershipType}/Profile/{destinyMembershipId}/
//https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/2/hoombauer
export const grabUser = (userName, platform) => {
  return dispatch => {
    return fetch(`${API_URL}/platform/userName`, {
      method: "GET",
      headers: {
        'content-Type': 'application/json',
        "X-API-Key": API_KEY
      }
      .then(response => response,json())
      .then(user => {
        dispatch(getUser(user))
      })
    })
  }
}