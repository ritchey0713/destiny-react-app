const initialState = {
  username: '',
  characters: {}
}

export default (state = initialState, action) => {

  switch (action.type) {
    case "GET_USER_INFO":
      debugger
      return {
        ...state,
        characters: action.user.Response["characters"]["data"]
      }
    case "SET_USERNAME":
      return {
        ...state,
        username: action.username
      }

    default:
      return state

  }
}