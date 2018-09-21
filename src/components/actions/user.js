const API_KEY = process.evn.REACT_APP_API_KEY
const API_URL = "https://www.bungie.net/Platform"

const getUser = user => {
  return {
    type: "GET_USER_INFO",
    user
  }
}

///Destiny2/{membershipType}/Profile/{destinyMembershipId}/

export const grabUser = (user) => {
  return dispatch => {
    return fetch(`${API_URL}`)
  }
}