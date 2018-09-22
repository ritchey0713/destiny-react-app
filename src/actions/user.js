const API_KEY = process.evn.REACT_APP_API_KEY
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
    return fetch(`${API_URL}/platform/userName`)
  }
}