const API_KEY = process.evn.REACT_APP_API_KEY

const getUser = user => {
  return {
    type: "GET_USER_INFO",
    user
  }
}